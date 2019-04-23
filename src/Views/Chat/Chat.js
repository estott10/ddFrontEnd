import React, { Component } from 'react';
import Board from '../Board/Board';
import Messaging from '../Messaging/Messaging';
import ChatHeader from '../ChatHeader/ChatHeader';


export default class Chat extends Component{
    // constructor(){

    //     this.state = {

    //     }
    // }
    //grab chat messages and hit endpoint... also get list of boards
    render(){
        return(

            <div style = {{display: "flex", flexDirection: "row"}}>
                <div>
                    <Board title="List of Boards"/>
                </div>
                <div>
                    <Messaging />
                </div>

            </div>
        )
    }


}