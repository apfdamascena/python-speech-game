import express from 'express';
import LoginController from './controllers/loginController';
import NewUserController from './controllers/newUserController';
import FunctionsController from './controllers/functionsController';
import GetUsers from './controllers/getUsers'; 
import GetScore from './controllers/getScore';

const routes = express.Router();
const loginController = new LoginController();
const newUserController = new NewUserController();
const dataFunctions = new FunctionsController();
const getUsers =  new GetUsers();
const getScore = new GetScore();

routes.post('/login-page', loginController.index);
routes.post('/new-user-page', newUserController.index);
routes.get('/game-page/:id/FUNCTIONS/:level',dataFunctions.index);
routes.get('/level-page/:id/:optionChosen', getScore.index);
routes.get('/ranking-page', getUsers.index)

export default routes;