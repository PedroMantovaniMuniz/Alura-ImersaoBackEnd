import express from 'express';

const app = express(); // Inicializa variável com o express
app.listen(3000, () => { // Chama a variável app com a função listen(quando chamado à porta 3000 execute a função)
    console.log('Servidor escutando...');
});

app.get('/api', (req, res) => { // Chama a variável app com a função get(endereço do servidor, responda à requisição com a função)
    res.status(200).send('Boas vindas');
});

