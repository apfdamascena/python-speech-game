import {Request, Response} from "express";
import firebase from 'firebase';
import firebaseRef from "../database/firebaseConfig";

export default class GetUsers {
    async index(request: Request, response: Response){
        await firebase.firestore(firebaseRef).collection("users").get().then((querySnapshot) => {
            var amountOfUsers = []
            querySnapshot.forEach((doc) => {
                let dataUser = doc.data();
                let infoUser = [dataUser.username, dataUser.score];
                amountOfUsers.push(infoUser);
            });
            return response.send({users: amountOfUsers})
        }).catch((error) => {console.log(error)})
    }
}