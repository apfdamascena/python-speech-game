import {Request, Response} from "express";
import dataFunctions from '../data/functions';
import firebase from 'firebase';
import firebaseRef from "../database/firebaseConfig";

export default class FunctionsController {
    async index(request: Request, response: Response){
        const { id } = request.params;
        
        firebase.firestore(firebaseRef).collection("users").doc(id).get().then(doc => {
            if (!doc.exists) {
                return response.send({SIGNATURE: dataFunctions, score: 0});
            } else {
                let object = doc.data();
                var score = object.score
                return response.send({SIGNATURE: dataFunctions, score: score});
            }
        }).catch((error) => {console.log(error)})
    }
}