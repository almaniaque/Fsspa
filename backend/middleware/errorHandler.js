export const notFound = (req, res, next) => {
  res.status(404).json({ success: false, message: `Route non trouvée : ${req.originalUrl}` });
};

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Erreur serveur interne",
  });
};
