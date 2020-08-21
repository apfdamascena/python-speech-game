import express from 'express';
import LoginController from './controllers/loginController';
import NewUserController from './controllers/newUserController';
import FunctionsController from './controllers/functionsController';
import ScoreController from './controllers/scoreController';

const routes = express.Router();
const loginController = new LoginController();
const newUserController = new NewUserController();
const dataFunctions = new FunctionsController();
const scoreController = new ScoreController();


routes.post('/login-page', loginController.index);
routes.post('/new-user-page', newUserController.index);
routes.get('game-page/', scoreController.index);
routes.get('/game-page/FUNCTIONS', dataFunctions.index);


export default routes;