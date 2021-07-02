import {Request, Response} from "express";
import firebase from 'firebase';
import firebaseRef from "../database/firebaseConfig";

export default class GetScore {
    async index(request: Request, response: Response){
        const { id } = request.params;
        
        firebase.firestore(firebaseRef).collection("users").doc(id).get().then(doc => {
            if (!doc.exists) {
                return response.send({score: 0});
            } else {
                let object = doc.data();
                var score = object.score
                return response.send({score: score});
            }
        }).catch((error) => {console.log(error)})
    }
}