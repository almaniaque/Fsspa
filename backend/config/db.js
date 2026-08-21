import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/fsppa-formation";
    await mongoose.connect(uri);
    console.log("[MongoDB] Connexion établie avec succès");
  } catch (error) {
    console.error("[MongoDB] Échec de connexion :", error.message);
    process.exit(1);
  }
};

export default connectDB;
