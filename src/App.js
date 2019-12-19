import React, {Component} from 'react';
import {CircleProgress} from 'react-gradient-progress';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 50,
            
            
        };
    }
    handleChange = (event) => {
     

        if(event.target.value >= 0 || event.target.value <= 100){
            this.setState({
                percent: event.target.value
            })
        }else {
            this.setState({
                percent: 0
            })
        }
        
    }
    render(){
        {console.log(this.state.percent)}
        return(
            <div>
                
            <CircleProgress percentage={this.state.percent} strokeWidth={15} primaryColor= {["red", "green","green","yellow"]}  secondaryColor="#f0f0f0" />
            <input 
            type = "number"
            min = "0"
            max = "100"
            value = {this.state.percent}
            onChange = {this.handleChange}
            />
            </div>
        );
    }
}

