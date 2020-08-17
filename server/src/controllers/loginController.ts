import {Request, Response} from "express";
import firebaseRef from '../database/firebaseConfig';

export default class LoginController {
    async index(request: Request, response: Response){
        const {email, password} = request.body;

        if(!email || !password){
            return response.send(404).json({message: "fields missing"});
        }

        try {
            await firebaseRef.auth().signInWithEmailAndPassword(email, password).then(() => {
                console.log(10);
            }).catch((error) => {console.log(error)})
        } catch(error){
            return response.send(402).json({message: "error"});
        }
    }
}