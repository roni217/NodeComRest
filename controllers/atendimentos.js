module.exports = app => {
    app.get('/atendimentos', (req, res) => 
    res.send('voce esta na rota de atendimento e esta realizando um GET'));

    app.post('/atendimentos', (req, res) =>{ 
        console.log(req.body)
        res.send('voce esta na rota de atendimento e esta realizando um POST')
    });
}