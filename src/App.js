import React, {Component} from 'react';
import {CircleProgress} from 'react-gradient-progress';


export default class App extends Component {
    render(){
        return(
            <CircleProgress percentage={70} strokeWidth={15} secondaryColor="#f0f0f0" />
        );
    }
}

