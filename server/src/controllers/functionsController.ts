import {Request, Response} from "express";
import dataFunctions from '../data/functions';

export default class FunctionsController {
    async index(request: Request, response: Response){
        return response.json(dataFunctions);
    }
}