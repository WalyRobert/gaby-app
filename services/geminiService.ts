// Serviço para integração com Gemini API

export async function getAutomationAction(prompt: string, apiKey?: string): Promise<string> {
  try {
    // Verificar se API key está disponível
    const key = apiKey || process.env.VITE_GEMINI_API_KEY;
    if (!key) {
      throw new Error('Chave de API Gemini não configurada');
    }
    
    // Implementar chamada para Gemini API aqui
    console.log('Gemini Action:', prompt);
    return `Ação automática para: ${prompt}`;
  } catch (error) {
    console.error('Erro ao obter ação de automação:', error);
    throw error;
  }
}

export default { getAutomationAction };
