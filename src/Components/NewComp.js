import React, { Component } from 'react';
import bellA from "./bellA.png";
import bellB from "./bellB.png";

class NewComp extends Component {
    constructor (props){
        super(props)

        this.state={
            message: "Click on Subscribe to start learning!",
            bTitle: "Subscribe",
            imageUrl: bellA
        };
    }

    buttonChange = () =>{
        this.setState(
            {
                message: "Now you have subscribed, hit the bell icon to get notification",
                bTitle: "Subscribed"
            }
        );
    }

    imageChange = () =>{
        this.setState(
            {
                message: "keep learning, you will get notifications!" ,
                imageUrl: bellB
            }
        )
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.buttonChange}>{this.state.bTitle}</button>
                <img 
                    style={{width: "30px" , height: "30px"}}
                    src={this.state.imageUrl}
                    onClick={this.imageChange}/>
            </div>
        );
    }
}

export default NewComp;

