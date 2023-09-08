const express = require('express');
const rastreadorController = require('./controller/rastreador.controller');

const routes = express.Router(); // usado para fazer as rotas

routes.get('/', function(req,res){
    res.json({message: "Teste de rota"})
})


routes.get('/rastreador', rastreadorController.index)
routes.post('/rastreador', rastreadorController.create)
routes.get('/rastreador/:_id', rastreadorController.detail)
routes.delete('/rastreador/:_id', rastreadorController.delete)
routes.put('/rastreador', rastreadorController.update)

module.exports = routes // suficiente para exportar todas as rotas
