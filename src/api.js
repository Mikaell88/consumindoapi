const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q=star%20trek'
});

// Função para testar a conexão
async function testarConexao() {
    try {
        const response = await api.get();
        console.log('Conexão bem-sucedida!');
        console.log('Dados recebidos:', response.data);
    } catch (error) {
        console.error('Erro ao conectar:', error.message);
    }
}

// Chamada da função para teste
testarConexao();
