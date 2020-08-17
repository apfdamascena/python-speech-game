import {Request, Response} from "express";
import firebaseRef from "../database/firebaseConfig";
import firebase from "firebase";

export default class NewUserController {
    async index(request: Request, response: Response){
        const {username, email, password, confirmPassword, score} = request.body;

        if(!email || !password){
            return response.send(404).json({message: "missing fields"});
        }

        if(password == confirmPassword){
            await firebaseRef.auth().createUserWithEmailAndPassword(email, password).then( () => {
                let currentUser = firebaseRef.auth().currentUser;
                firebase.firestore(firebaseRef)
                    .collection("users")
                    .doc(currentUser?.uid)
                    .set({
                        score: score,
                        username: username
                    }).then(() => {
                        console.log("registred");
                    }).catch((error) => {console.log(error)})
            }).catch((error) => {console.log(error)})
        } else {
            return response.send(403).json({massage: "password are not the same"});
        }
    }
}