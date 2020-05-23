import * as firebase from "firebase/app";
import isEmail from "./UtilsFunctions";
import isPassword from "./UtilsFunctions";

export default function Login(email,password){
    if(!isEmail(email)){
        alert("Please, enter an email adress");
        return;
    }
    if(!isPassword(password)){
        alert("Please, enter a password");
        return;
    }
    firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
        if(errorCode == 'auth/wrong-password'){
            alert("Wrong password");
        } else{
            alert(errorMessage);
        }
        console.log(error);
    });
}