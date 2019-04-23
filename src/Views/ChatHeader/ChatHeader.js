import React, { Component } from 'react';
import axios from 'axios';

export default class ChatHeader extends Component{
  constructor(props){
    super(props)
    this.state = {
        roomsList: [],
        currentRoom: '',
        roomID: this.props.id
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:8080/api/rooms/${this.props.id}`)
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

  render(props){
    const {title, headerTitle} = this.props;

    return(
        <div style= {{color: "black"}}>
           {this.props.headerTitle}
        </div>
    )
  }
}