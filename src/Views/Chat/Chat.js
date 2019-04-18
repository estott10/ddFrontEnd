import React, { Component } from 'react';
import Board from '../Board/Board';

export default class Chat extends Component{
    // constructor(){

    //     this.state = {

    //     }
    // }
    render(){
        return(

            <div>CHAT APPLICATION
                <Board title="List of Boards"/>
                <div>Chat Messages</div>

            </div>
        )
    }


}