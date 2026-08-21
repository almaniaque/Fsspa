import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: [true, "Le nom est obligatoire"],
      trim: true,
      maxlength: 120,
    },
    entreprise: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "",
    },
    telephone: {
      type: String,
      trim: true,
      maxlength: 30,
      default: "",
    },
    email: {
      type: String,
      required: [true, "L'e-mail est obligatoire"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Adresse e-mail invalide"],
    },
    typeFormation: {
      type: String,
      required: [true, "Le type de formation souhaitée est obligatoire"],
      enum: [
        "Sécurité routière",
        "Sensibilisation seniors",
        "Addictions et conduite",
        "Gestion du stress",
        "Prise de parole en public",
        "Analyse transactionnelle",
        "Autre / à préciser",
      ],
    },
    message: {
      type: String,
      required: [true, "Le message est obligatoire"],
      trim: true,
      maxlength: 3000,
    },
    consentementRGPD: {
      type: Boolean,
      required: [true, "Le consentement RGPD est requis"],
      validate: {
        validator: (v) => v === true,
        message: "Le consentement RGPD doit être accepté",
      },
    },
    statut: {
      type: String,
      enum: ["nouveau", "traité", "archivé"],
      default: "nouveau",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
