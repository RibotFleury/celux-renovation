
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Configuration CORS plus permissive pour le débogage
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

// Logging pour Render (visible dans les logs Render)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

const EMAIL_USER = process.env.EMAIL_USER || 'kamsuleader@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'fddsavvshmpbshck';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // Aide à passer certains blocages de serveurs
  }
});

app.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'online', 
    message: 'API Celux opérationnelle',
    timestamp: new Date()
  });
});

app.post('/send-estimate', async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ success: false, message: 'Données manquantes' });
  }

  // Optionnel: Ici nous pourrions ajouter l'envoi vers Notion via @notionhq/client
  // Mais pour résoudre l'erreur 500 actuelle, nous fiabilisons l'email.

  const mailOptions = {
    from: `"Celux Web" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    subject: `💎 PROJET : ${service} - ${name}`,
    html: `
      <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #000;">Nouvelle demande de devis</h2>
        <hr border="0" style="border-top: 1px solid #eee;">
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Service :</strong> ${service}</p>
        <p><strong>Détails :</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</div>
      </div>
    `,
    replyTo: email
  };

  try {
    console.log(`Tentative d'envoi d'email pour ${name}...`);
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès.');
    res.status(200).json({ success: true });
  } catch (error) {
    // On log l'erreur complète pour la voir dans les logs de Render
    console.error('ERREUR CRITIQUE ENVOI EMAIL:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erreur interne du serveur', 
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`-----------------------------------------`);
  console.log(`Serveur Celux démarré sur le port ${PORT}`);
  console.log(`Destination email: ${EMAIL_USER}`);
  console.log(`-----------------------------------------`);
});
