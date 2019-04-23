import React, { Component } from 'react';
import axios from 'axios';
import Messaging from '../Messaging/Messaging'
import ChatHeader from '../ChatHeader/ChatHeader'


export default class Board extends Component{
  constructor(){
    super()
    this.state = {
        roomsList: [],
        currentRoom: '',
        currentRoomId: ''
    }
  }

  componentDidMount(){
      axios.get('http://localhost:8080/api/rooms/')
      .then( response => {
          console.log(response.data)
          const roomNames = []
          response.data.map((elem, i, arr) => {
            roomNames.push(elem.name)
          })
          console.log(roomNames)
        this.setState({roomsList: roomNames})
      } )
  }

  handleChange(elem){
      this.setState({currentRoom: elem})
      console.log(this.state.currentRoom)
  }
  render(props){
    const {title} = this.props;
    const {roomsList, currentRoom} = this.state;

    return(
        <div style = {{display: "flex", flexDirection: "row", backgroundColor: "white", color: "white"}}>
            <div style = {{display: "flex", flexDirection: "column", backgroundColor: "red", color: "white"}}>
            {title}
  
            {roomsList.map( (elem, i) => {
                 return <ul onClick={() => {this.handleChange(elem)}} key ={i}>{elem}</ul>
            })}
            </div>
            <div style = {{display: "flex", flexDirection: "column"}}>
               <div> <ChatHeader headerTitle= {this.state.currentRoom}/></div>
               <div> <Messaging /></div>
            </div>
        </div>
    )
  }




}