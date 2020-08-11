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
            querySnapshot.forEach( (doc) => {
                let dataUser = doc.data()
                let infoUser = [dataUser.username, dataUser.score]
                const users = this.state.amountOfUsers
                users.push(infoUser);
                this.setState({ amountOfUsers: users})
            });
            let users = this.state.amountOfUsers;
            users.sort(function(a,b){
                return b[1]-a[1];
            });
        });
        console.log(this.state.amountOfUsers);
    }

    componentWillMount(){
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