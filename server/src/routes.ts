import express from 'express';
import LoginController from './controllers/loginController';
import NewUserController from './controllers/newUserController';

const routes = express.Router();
const loginController = new LoginController();
const newUserController = new NewUserController();

routes.post('/login-page', loginController.index);
routes.post('/new-user-page', newUserController.index);

export default routes;