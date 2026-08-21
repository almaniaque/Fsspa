import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";

const buildTransporter = () => {
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// @desc    Créer une nouvelle demande de contact / devis
// @route   POST /api/contact
// @access  Public
export const createContact = async (req, res) => {
  try {
    const { nom, entreprise, telephone, email, typeFormation, message, consentementRGPD } = req.body;

    const contact = await Contact.create({
      nom,
      entreprise,
      telephone,
      email,
      typeFormation,
      message,
      consentementRGPD,
    });

    // Envoi d'un e-mail de notification si la config SMTP est renseignée (best-effort)
    const transporter = buildTransporter();
    if (transporter && process.env.ADMIN_EMAIL) {
      transporter
        .sendMail({
          from: `"Site FSPPA-Formation" <${process.env.EMAIL_USER}>`,
          to: process.env.ADMIN_EMAIL,
          replyTo: email,
          subject: `Nouvelle demande de devis — ${typeFormation}`,
          text: `Nom: ${nom}\nEntreprise: ${entreprise || "-"}\nTéléphone: ${telephone || "-"}\nEmail: ${email}\nType de formation: ${typeFormation}\n\nMessage:\n${message}`,
        })
        .catch((err) => console.error("[Mailer] Échec de l'envoi :", err.message));
    }

    return res.status(201).json({
      success: true,
      message: "Votre demande a bien été envoyée. Nous revenons vers vous rapidement.",
      data: contact,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(" / ") });
    }
    console.error("[createContact]", error);
    return res.status(500).json({ success: false, message: "Erreur serveur, veuillez réessayer." });
  }
};

// @desc    Lister les demandes de contact (usage interne / admin ultérieur)
// @route   GET /api/contact
// @access  Public (à protéger par auth dans une V2)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    console.error("[getContacts]", error);
    return res.status(500).json({ success: false, message: "Erreur serveur." });
  }
};
