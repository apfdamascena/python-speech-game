require('dotenv').config();

import express from 'express';
import routes from './routes';
import cors from "cors";

const APP = express();
APP.use(cors());
APP.use(express.json());
APP.use(routes);

APP.listen(process.env.PORT || 4000);