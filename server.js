const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'build')));

// Responder com o index.html para qualquer rota que não seja uma estática
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 4004;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
