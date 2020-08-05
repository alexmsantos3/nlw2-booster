import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const ClassesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', ClassesControllers.index);
routes.post('/classes', ClassesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);


export default routes;


// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente "rota/:id"

// Corpo (Request Body): Dados para a criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

// ################ Exemplo de GET #####################
// app.get('/', (request, response) => {
//   return response.json({ message: 'Hello World!' });
// } );

// ################ Exemplo de POST #####################
// app.post('/users', (request, response) => {
//   console.log(request.body);
//   const users = [
//     {nome: 'Alex', age: 25},
//     {nome: 'Jennifer', age: 23}
//   ]; 

//   return response.json(users);
// } );

// ################ Exemplo de DELETE #####################
// app.delete('/users/:id', (request, response) => {
//   console.log(request.body);
//   const users = [
//     {id: 1, nome: 'Alex', age: 25},
//     {id: 2, nome: 'Jennifer', age: 23}
//   ]; 

//   return response.json(users);
// } );