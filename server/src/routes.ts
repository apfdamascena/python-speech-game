import express from 'express';
import LoginController from './controllers/loginController';
import NewUserController from './controllers/newUserController';
import FunctionsController from './controllers/functionsController';
import GetUsers from './controllers/getUsers'; 

const routes = express.Router();
const loginController = new LoginController();
const newUserController = new NewUserController();
const dataFunctions = new FunctionsController();
const getUsers =  new GetUsers();

routes.post('/login-page', loginController.index);
routes.post('/new-user-page', newUserController.index);
routes.get('/game-page/:id/FUNCTIONS', dataFunctions.index);
routes.get('/ranking-page', getUsers.index)

export default routes;