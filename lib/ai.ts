import { api } from "./axios";

type ChatResponse = {
  response: string;
};

export async function chat(message: string): Promise<ChatResponse> {
  const { data } = await api.post<ChatResponse>("/ai/chat", {
    message,
  });

  return data;
}