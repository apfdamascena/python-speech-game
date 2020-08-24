import {Request, Response} from "express";
import firebase from 'firebase';
import firebaseRef from "../database/firebaseConfig";

export default class AudioController {
    index(request: Request, response: Response){
        const {user, blobURL, blob, points } = request.body;

        firebase.storage(firebaseRef).ref("audios/"+blobURL).put(blob).then((snapshot) => {
            console.log(10); 
        }).catch((error) => {return response.send(400)})

        if(!user.isAnonymous){
            firebase.firestore(firebaseRef).collection("users").doc(user.uid).update({
                score: (points+10)
            }).then((response) => {
                console.log("foi");
            }).catch((error) => {return response.send(400)})
        }

        return response.send(200);
        // firebase.storage().ref("audios/"+blobURL).put(blob).then( (snapshot) => {
        //     if(!user.isAnonymous){
        //         firebase.firestore(firebaseRef).collection("users").doc(user.uid).update({
        //             score : (points+10)
        //         }).then((response) => {
        //             console.log("foi");
        //         }).catch((error) => {return response.send(400).json({message: error })})
        //     }
        //     return response.send(202);
        // }).catch((error) => {return response.send(400).json({message: error })})
    }
}
