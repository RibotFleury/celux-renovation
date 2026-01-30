const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  const { name, email, service, message } = req.body || {};

  if (!name || !email || !service || !message) {
    return res.status(400).json({
      success: false,
      error: 'Tous les champs sont obligatoires'
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Celux Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `💎 NOUVEAU PROJET : ${service} - ${name}`,
      html: `<p><strong>Nom :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Service :</strong> ${service}</p>
             <p>${message}</p>`
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Erreur SMTP:', error);
    return res.status(500).json({
      success: false,
      error: 'Erreur lors de l’envoi du message'
    });
  }
};
