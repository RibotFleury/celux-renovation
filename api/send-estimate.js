import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Données manquantes' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: `"Formulaire Celux" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `🚀 Nouveau Projet: ${service} - ${name}`,
      html: `
        <h2>Nouvelle demande</h2>
        <p><b>Nom:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
      replyTo: email
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erreur envoi email' });
  }
}
