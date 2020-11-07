const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.status(200).json({
        nome: "carlos",
        idade: 19,
        sexo: "masculino",
    });
});

app.listen(port);