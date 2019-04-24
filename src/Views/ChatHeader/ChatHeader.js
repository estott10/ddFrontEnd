import React, { Component } from 'react';
import axios from 'axios';

export default class ChatHeader extends Component{
  constructor(props){
    super(props)
    this.state = {
        roomsList: [],
        currentRoom: '',
        currentRoomId: this.props.currentRoomId,
        currentUsers: this.props.currentUsers
    }
  }
//   componentDidMount(props){
//     // axios.get(`http://localhost:8080/api/rooms/${this.props.currentRoomId}`)
//     // .then( response => {
//     //     console.log(response.data.users)
//     //         this.setState({currentUsers: response.data.users})
//     //     })
//     //     console.log(this.state.currentUsers)
// }

  render(props){
    const {title, headerTitle} = this.props;
    const {currentUsers} = this.state;

    return(
        <div style= {{color: "black"}}>
        
           {this.props.headerTitle}
           
           {currentUsers.map(
               (elem, i) => {
                return <ul key ={i}>{elem}</ul>
           })}
        </div>
    )
  }
}