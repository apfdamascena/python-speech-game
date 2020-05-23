import * as firebase from "firebase/app";
import isEmail from "./UtilsFunctions";
import isPassword from "./UtilsFunctions";


export default function signUp(email,password){
    if(!isEmail(email)){
        alert("Please, give me a correct email.");
        return;
    }
    if(!isPassword(password)){
        alert("Please, give me a password greatest than five characters");
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
        let errorMessage = error.message;
        alert(errorMessage);
        console.log(error);

    }); 
}

export default function sendVerification(){
    firebase.auth().sendVerification().then(function(){
        alert("Email verification was sent");
    })
}