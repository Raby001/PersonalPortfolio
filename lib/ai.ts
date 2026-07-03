const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function chat(message: string) {
  const response = await fetch(`${API_URL}/ai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to chat with AI");
  }

  return response.json();
}