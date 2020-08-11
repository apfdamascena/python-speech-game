import React, {Component} from  'react';
import fire from '../../FireBase/FireBase';
import firebase from 'firebase';
import './RankingPage.css';

class RankingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            amountOfUsers: []
        }
    }

    getAllUsers = () => {
        let store = firebase.firestore(fire);
        store.collection("users").get().then( (querySnapshot) => {
            console.log(querySnapshot);
        })
    }

    componentDidMount(){
        console.log("10");
        this.getAllUsers();
    }

    render(){
        return(
            <div className = "container-RankingPage">
                <h2>alex paulo ferreira Damascena</h2>
            </div>
        );
    }
}

export default RankingPage;