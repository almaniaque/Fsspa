const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function submitContact(payload) {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Une erreur est survenue lors de l'envoi.");
  }

  return data;
}
