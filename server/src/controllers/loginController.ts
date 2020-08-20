import {Request, Response} from "express";
import firebaseRef from '../database/firebaseConfig';

export default class LoginController {
    async index(request: Request, response: Response){
        const {email, password} = request.body;

        if(!email && !password){
            try {
                firebaseRef.auth().signInAnonymously().then((user) => {
                    return response.send(user);
                }).catch((error) => {
                    console.log(error);
                });
            } catch (error) { console.log(error); }
        }

        if((!email && password) || (email && !password)){
            return response.send(404).json({message: "fields missing"})
        }

        if(email && password){
            try {
                await firebaseRef.auth().signInWithEmailAndPassword(email, password).then((user) => {
                    return response.send(user);
                }).catch( (error) => { console.log(error)})
            }   catch(error){
                return response.send(402).json({message: "error"});
            }
        }
    }
}