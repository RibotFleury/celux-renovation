
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Configuration CORS sécurisée
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

// Logs de requêtes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

const EMAIL_USER = process.env.EMAIL_USER || 'kamsuleader@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'wixqfcnzuojxuucy';

// Utilisation du port 465 (SMTPS) qui est plus direct et moins sujet aux blocages
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  },
  pool: true, // Garde la connexion ouverte pour plus de rapidité
  tls: {
    rejectUnauthorized: false
  }
});

// Test de connexion au démarrage
transporter.verify((error) => {
  if (error) {
    console.error('ERREUR SMTP INITIALE:', error);
  } else {
    console.log('✅ Serveur SMTP prêt (Port 465)');
  }
});

app.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'online', 
    service: 'Celux Email API',
    config: { user: EMAIL_USER ? 'OK' : 'MISSING' }
  });
});

app.post('/send-estimate', async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ success: false, message: 'Données manquantes' });
  }

  const mailOptions = {
    from: `"Site Web Celux" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    subject: `💎 DEVIS : ${service} - ${name}`,
    html: `
      <div style="font-family: sans-serif; border: 1px solid #eee; padding: 30px; border-radius: 15px; max-width: 600px;">
        <h2 style="color: #000; border-bottom: 2px solid #eeca38; padding-bottom: 10px;">Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Service :</strong> <span style="background: #eeca38; color: black; padding: 2px 8px; border-radius: 4px; font-weight: bold;">${service}</span></p>
        <p><strong>Message :</strong></p>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; border-left: 5px solid #eeca38;">${message}</div>
        <p style="font-size: 10px; color: #aaa; margin-top: 20px;">Envoyé depuis le site Celux Renovation</p>
      </div>
    `,
    replyTo: email
  };

  try {
    console.log(`Envoi en cours pour ${name}...`);
    await transporter.sendMail(mailOptions);
    console.log('✅ Email envoyé.');
    res.status(200).json({ success: true, message: 'Email envoyé' });
  } catch (error) {
    console.error('❌ ERREUR SMTP:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erreur serveur lors de l\'envoi', 
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});