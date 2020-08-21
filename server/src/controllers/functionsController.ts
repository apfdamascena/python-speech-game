import {Request, Response} from "express";
import dataFunctions from '../data/functions';

export default class FunctionsController {
    async index(request: Request, response: Response){
        console.log(request.headers)
        return response.json(dataFunctions);
    }
}