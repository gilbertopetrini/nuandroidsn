const express = require('express');
const bodyParser = require('body-parser');
const admin = require('./firebase-config'); // importa o Firebase Admin

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/webhook/kirvano', async (req, res) => {
    let idVenda = req.body?.id || req.body?.venda_id;

    if (!idVenda) {
        return res.status(400).send('ID da venda não encontrado');
    }

    // Remove o "#" se tiver
    idVenda = idVenda.replace('#', '').toUpperCase();
    const email = `${idVenda}@gmail.com`;
    const senha = gerarSenhaAleatoria();

    try {
        // Cria o usuário no Firebase Authentication
        const user = await admin.auth().createUser({
            email: email,
            password: senha,
        });

        console.log(`Usuário criado com sucesso: ${email}`);

        // Você pode armazenar o e-mail/senha em outro banco ou enviar por e-mail para o cliente

        res.status(200).send(`Usuário criado: ${email}`);
    } catch (error) {
        console.error('Erro ao criar usuário:', error.message);

        if (error.code === 'auth/email-already-exists') {
            return res.status(409).send('Usuário já existe');
        }

        res.status(500).send('Erro ao criar usuário');
    }
});

function gerarSenhaAleatoria(tamanho = 8) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        senha += chars[Math.floor(Math.random() * chars.length)];
    }
    return senha;
}

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});