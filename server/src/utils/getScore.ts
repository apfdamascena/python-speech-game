import firebase from 'firebase';
import firebaseRef from "../database/firebaseConfig";

export default class GetScore {
    static async index(id: string){
        var score;
        firebase.firestore(firebaseRef).collection("users").doc(id).get().then(doc => {
            if(!doc.exists) {
                score = 0;
            } else {
                let object = doc.data();
                score = object.score;
            }
        }).catch((error) => {console.log(error)})
        return score;
    }
}