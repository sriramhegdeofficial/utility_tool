import React, {Component} from 'react';
import {CircleProgress} from 'react-gradient-progress';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 50
            
        };
    }
    handleChange = (event) => {
       let  percentValue = parseInt(event.target.value);

        if(percentValue >= 0 || percentValue <= 100){
            this.setState({
                percent: percentValue
            })
        }
        
    }
    render(){
        {console.log(this.state.percent)}
        return(
            <div>
                
            <CircleProgress percentage={this.state.percent} strokeWidth={15} primaryColor= {["red", "green","green","yellow"]}  secondaryColor="#f0f0f0" />
            <input 
            
            onChange = {this.handleChange}
            />
            </div>
        );
    }
}

