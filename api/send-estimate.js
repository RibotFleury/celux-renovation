
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Garantir une réponse JSON systématique
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Méthode non autorisée' });
  }

  const { name, email, service, message } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ success: false, message: 'Champs requis manquants' });
  }

  // Utilisation des variables d'environnement avec fallbacks sécurisés
  const user = process.env.EMAIL_USER || 'kamsuleader@gmail.com';
  const pass = process.env.EMAIL_PASS || 'wixqfcnzuojxuucy';

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Port 465 nécessite secure: true
    auth: { user, pass },
    tls: {
      // Évite les erreurs de certificat sur certains serveurs cloud (comme Vercel)
      rejectUnauthorized: false
    }
  });

  try {
    await transporter.sendMail({
      from: `"Celux Web" <${user}>`,
      to: 'kamsuleader@gmail.com',
      subject: `💎 NOUVEAU PROJET : ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eeca38; border-radius: 12px; max-width: 600px; color: #333;">
          <h2 style="color: #000; margin-bottom: 20px;">Demande de Devis Celux Signature</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;" />
          <p><strong>Nom du prospect :</strong> ${name}</p>
          <p><strong>Email de contact :</strong> ${email}</p>
          <p><strong>Type de Service :</strong> <span style="color: #d9b832; font-weight: bold; background: #fef9e7; padding: 2px 8px; border-radius: 4px;">${service}</span></p>
          <p><strong>Détails du projet :</strong></p>
          <div style="background: #f7f7f7; padding: 15px; border-radius: 8px; border-left: 4px solid #000; font-style: italic;">${message}</div>
          <p style="margin-top: 30px; font-size: 10px; color: #888; text-align: center; border-top: 1px solid #f0f0f0; padding-top: 10px;">
            Cet email a été généré automatiquement par le formulaire de contact Celux Renovation.
          </p>
        </div>
      `,
      replyTo: email
    });

    return res.status(200).json({ success: true, message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur SMTP Vercel:', error);
    // On renvoie un JSON même en cas d'erreur SMTP pour que le frontend puisse l'afficher proprement
    return res.status(500).json({ 
      success: false, 
      error: 'Erreur lors de l’envoi du message', 
      details: error.message 
    });
  }
};