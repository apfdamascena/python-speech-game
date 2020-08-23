import {Request, Response} from "express";
import firebase from 'firebase';
import firebaseRef from "../database/firebaseConfig";

export default class AudioController {
    async index(request: Request, response: Response){
        const {user, blobURL, blob, points } = request.body;

        firebase.storage().ref("audios/"+blobURL).put(blob).then( (snapshot) => {
            if(!user.isAnonymous){
                firebase.firestore(firebaseRef).collection("users").doc(user.uid).update({
                    score : (points+10)
                }).catch((error) => console.log(error));
            }
            return response.send(202).json({message: "audio was sent"});
        }).catch((error) => console.log(error));
    }
    }
}