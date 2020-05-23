import * as firebase from "firebase/app";
import isEmail from "./UtilsFunctions";
import isPassword from "./UtilsFunctions";

export default function sendResetPassword(email) {
    firebase.auth().sendPasswordResetEmail(email).then(function () {
        alert("Password reset was send to your email");
    }).catch(function (error) {
        let errorCode=error.code;
        let errorMessage=error.message;
        if(errorCode == 'auth/invalid-email'){
            alert(errorMessage);
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}