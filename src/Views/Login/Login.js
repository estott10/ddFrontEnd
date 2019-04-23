import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Login extends Component {
  render() {
    return (
  
        <div className="login">
            <input placeholder="Type your username..." style= {{padding: "5px 60px", marginBottom: "20px"}}></input>
                <Link to="/chat">
            <button style= {{backgroundColor: "red", color: "white", borderRadius: "4px", padding: "5px 60px"}}> Join the DoorDash Chat!</button>
               </Link>
        </div>
     
    );
  }
}
