import { Request, Response } from "express";
import firebaseRef from '../database/firebaseConfig';
import firebase from 'firebase';

export default class scoreController {
    async index(request: Request, response: Response) {
        let user = firebase.auth().currentUser;
        if (!user.isAnonymous) {
            firebase.firestore(firebaseRef).collection("users").doc(user.uid).get().then(doc => {
                if (!doc.exists) {
                    console.log("dont't exist");
                } else {
                    let object = doc.data();
                    return response.send({ score: object.score })
                }
            })
        }
    }
}