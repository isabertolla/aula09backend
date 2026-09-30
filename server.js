const express = require('express');
const app = express();
const PORT = 3000;

// Middleware obrigatório para permitir o envio de JSON no req.body
app.use(express.json());

// Rota POST solicitada na atividade: /pets
app.post('/pets', (req, res) => {
    const { nome, raca, idade } = req.body;

    // Validação: verifica se os campos obrigatórios foram enviados
    if (!nome || !raca) {
        return res.status(400).json({ 
            erro: "Nome e raça são obrigatórios!" 
        });
    }

    // Caso os dados estejam corretos, retorna status 201 Created
    return res.status(201).json({
        mensagem: "Pet cadastrado!",
        pet: { 
            id: 10, 
            nome, 
            raca, 
            idade
        }
    });
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor a executar em http://localhost:${PORT}`);
});