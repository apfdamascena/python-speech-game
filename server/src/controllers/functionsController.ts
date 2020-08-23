import {Request, Response} from "express";
import dataFunctions from '../data/functions';
import askTitle from '../data/ask';
import firebase from 'firebase';
import firebaseRef from "../database/firebaseConfig";

export default class FunctionsController {
    async index(request: Request, response: Response){
        const { id } = request.params;
        
        firebase.firestore(firebaseRef).collection("users").doc(id).get().then(doc => {
            if (!doc.exists) {
                return response.send({SIGNATURE: dataFunctions, score: 0, ASK: askTitle});
            } else {
                let object = doc.data();
                var score = object.score
                return response.send({SIGNATURE: dataFunctions, score: score, ASK: askTitle});
            }
        }).catch((error) => {console.log(error)})
    }
}