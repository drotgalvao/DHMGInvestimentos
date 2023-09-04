// Em LoginApi.tsx
import axios from 'axios';

// Função para fazer a solicitação de login
export async function login(data: string) {
  try {
    // Fazer parsing (análise) da string JSON para um objeto JavaScript
    const requestData = JSON.parse(data);

    const response = await axios.post('http://127.0.0.1:5000/api/user/login', requestData);

    if (response.status === 200) {
      // A resposta é bem-sucedida, retorna os dados do usuário
      return response.data;
    } else {
      // Lide com os erros do servidor aqui e retorne uma mensagem de erro
      console.error('Erro no servidor:', response.data);
      throw new Error('Erro ao fazer login');
    }
  } catch (error) {
    // Lide com erros de rede ou outros erros aqui e retorne uma mensagem de erro
    console.error('Erro ao fazer login:', error);
    throw new Error('Erro ao fazer login');
  }
}
