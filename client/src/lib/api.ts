const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function fetchTickets() {
  const res = await fetch(`${API_URL}/tickets`);
  return res.json();
}
