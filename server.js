const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Porta padrão 3000, ou uma porta fornecida pelo ambiente

// Define o middleware para servir arquivos estáticos na pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
