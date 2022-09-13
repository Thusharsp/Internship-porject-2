import React from "react";
import { Component } from "react";

function demo(){
    alert('Welcome')
}
class Main extends Component{
    render(){
        return(
        <div class="Main">
            <input type="name"
            <button onClick={demo}>Click Me!</button>
        </div>
        ) 
    }
}

export default Main;