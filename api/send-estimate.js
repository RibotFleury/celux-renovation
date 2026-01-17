
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Définir le type de contenu en JSON immédiatement
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, service, message } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER || 'kamsuleader@gmail.com',
      pass: process.env.EMAIL_PASS || 'fddsavvshmpbshck'
    }
  });

  try {
    await transporter.sendMail({
      from: `"Celux Web" <${process.env.EMAIL_USER || 'kamsuleader@gmail.com'}>`,
      to: 'kamsuleader@gmail.com',
      subject: `💎 NOUVEAU PROJET : ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eeca38; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #000; margin-bottom: 20px;">Demande de Devis Celux</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Service :</strong> <span style="color: #d9b832; font-weight: bold;">${service}</span></p>
          <p><strong>Message :</strong></p>
          <div style="background: #f7f7f7; padding: 15px; border-radius: 8px; border-left: 4px solid #000;">${message}</div>
          <p style="margin-top: 20px; font-size: 11px; color: #888;">Envoyé via la route interne Vercel.</p>
        </div>
      `,
      replyTo: email
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur SMTP Interne:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};