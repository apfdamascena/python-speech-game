import {Request, Response} from "express";
import easyFunctions from '../data/functions/easyFunctions';
import askTitle from '../data/ask';
import GetScore from "./getScore";
import firebaseRef from "../database/firebaseConfig";
import firebase from "firebase";

export default class FunctionsController {

    constructor(){
        let getScore = new GetScore();
    }
    async index(request: Request, response: Response){
        const {id, level} = request.params;

        firebase.firestore(firebaseRef).collection("users").doc(id).get().then(doc => {
            var score = 0;
            if (doc.exists) {
                let object = doc.data();
                score = object.score
            }

            switch(parseInt(level)){
                case 1:
                    return response.send({SIGNATURE: easyFunctions, ASK: askTitle, score: score})
            }

        }).catch((error) => {console.log(error)})


    
    }
}