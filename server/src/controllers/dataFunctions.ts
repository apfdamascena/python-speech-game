import {Request, Response} from "express";
import dataFunctions from '../data/functions';

export default class DataFunctions {
    async index(request: Request, response: Response){
        return response.json(dataFunctions);
    }
}