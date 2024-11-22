import express from 'express';

const posts = [ // Array de objetos para base de dados
    {
        descricao: 'Foto teste',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        descricao: 'Paisagem montanhosa',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        descricao: 'Cachorro brincando',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        descricao: 'Comida deliciosa',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        descricao: 'Cidade à noite',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        descricao: 'Arte abstrata',
        imagem: 'https://placecats.com/millie/300/150'
    }
];

const app = express(); // Inicializa variável com o express
app.listen(3000, () => { // Chama a variável app com a função listen(quando chamado à porta 3000 execute a função)
    console.log('Servidor escutando...');
});

app.get('/api', (req, res) => { // Chama a variável app com a função get(rota do servidor, responda à requisição com a função)
    res.status(200).send();
});

