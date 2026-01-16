const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

/**
 * CONFIGURATION ET MIDDLEWARES
 */
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration de l'expéditeur
const EMAIL_USER = 'kamsuleader@gmail.com';
const EMAIL_PASS = 'fddsavvshmpbshck'; // Votre App Password Google

/**
 * CONFIGURATION DU TRANSPORTEUR GMAIL
 */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 10000, // 10 secondes
  greetingTimeout: 10000,
  socketTimeout: 10000
});

/**
 * VÉRIFICATION DE LA CONNEXION AU DÉMARRAGE
 */
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ ERREUR SMTP :', error.message);
  } else {
    console.log('✅ SMTP PRÊT : Gmail est configuré pour Celux');
  }
});

/**
 * GÉNÉRATEUR DE TEMPLATE HTML
 */
const generateEmailHTML = (name, email, service, message) => `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4; padding: 20px; margin: 0; }
      .container { max-width: 600px; background: #ffffff; margin: 20px auto; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.1); border-top: 8px solid #eeca38; }
      .header { background: #000000; color: #ffffff; padding: 40px 20px; text-align: center; }
      .header h1 { margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase; }
      .content { padding: 40px; color: #333333; line-height: 1.6; }
      .field { margin-bottom: 30px; }
      .label { font-size: 10px; font-weight: 800; color: #eeca38; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; display: block; }
      .value { font-size: 16px; color: #1a1a1a; font-weight: 600; }
      .service-badge { background: #fff9e6; color: #b38f00; padding: 6px 12px; border-radius: 8px; font-size: 14px; border: 1px solid #ffe680; }
      .message-box { background: #f9f9f9; padding: 25px; border-radius: 15px; border-left: 4px solid #000; font-style: italic; color: #555; }
      .footer { background: #f8f8f8; padding: 20px; text-align: center; font-size: 11px; color: #999; border-top: 1px solid #eeeeee; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>CELUX <span style="color:#eeca38">RENOVATION</span></h1>
      </div>
      <div class="content">
        <div class="field">
          <span class="label">Client</span>
          <span class="value">${name}</span>
        </div>
        <div class="field">
          <span class="label">Contact</span>
          <span class="value">${email}</span>
        </div>
        <div class="field">
          <span class="label">Prestation souhaitée</span>
          <span class="service-badge">${service.toUpperCase()}</span>
        </div>
        <div class="field">
          <span class="label">Détails du projet</span>
          <div class="message-box">"${message}"</div>
        </div>
      </div>
      <div class="footer">
        © ${new Date().getFullYear()} Celux Renovation - Notification de leads Web
      </div>
    </div>
  </body>
  </html>
`;

/**
 * POINT DE TERMINAISON : ENVOI DE L'ESTIMATION
 */
app.post('/send-estimate', async (req, res) => {
  const { name, email, service, message } = req.body;

  // 1. Validation de sécurité
  if (!name || !email || !service || !message) {
    console.warn('⚠️ Tentative d\'envoi avec des champs vides');
    return res.status(400).json({
      success: false,
      message: 'Veuillez remplir tous les champs obligatoires.'
    });
  }

  // 2. Préparation du mail
  const mailOptions = {
    from: `"Web Celux" <${EMAIL_USER}>`,
    to: EMAIL_USER, // On s'envoie le mail à soi-même
    subject: `💎 Nouveau Projet : ${service} - ${name}`,
    html: generateEmailHTML(name, email, service, message),
    replyTo: email // Permet de répondre directement au client
  };

  try {
    // 3. Envoi via Nodemailer
    const info = await transporter.sendMail(mailOptions);
    console.log(`🚀 EMAIL ENVOYÉ | ID: ${info.messageId} | Client: ${name}`);

    return res.status(200).json({
      success: true,
      message: 'Votre demande a été transmise avec succès.'
    });

  } catch (error) {
    console.error('❌ ERREUR D\'ENVOI :', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi de l\'e-mail.',
      error: error.message
    });
  }
});

/**
 * LANCEMENT DU SERVEUR
 */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('-----------------------------------------');
  console.log(`⚡ SERVEUR CELUX ACTIF SUR LE PORT ${PORT}`);
  console.log(`📧 EXPÉDITEUR : ${EMAIL_USER}`);
  console.log('-----------------------------------------');
});