import React, { Component } from 'react';
import axios from 'axios';
import ChatHeader from '../ChatHeader/ChatHeader';


export default class Messaging extends Component{
  constructor(){
    super()
    this.state = {
        roomsList: [],
        currentRoom: ''
    }
  }

  componentDidMount(){
   
  }
  render(props){
    const {title} = this.props;

    return(
        <div>
           Messages.....Post
        </div>
    )
  }
}