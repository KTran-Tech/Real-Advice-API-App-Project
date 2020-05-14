import React, {Component} from 'react';
import './App.css'
import axios from 'axios'


class App extends Component {
    state = {
        advice: ''
    }

    componentDidMount(){
        this.fetchAdice();
    }



    fetchAdice = () =>{
        axios.get('https://api.adviceslip.com/advice')
             .then(response=>{
                 //get 'advice' property from ...
                 const { advice } = response.data.slip;
                 
                 this.setState({
                     advice: advice
                 })
             })
             .catch(error=>{
                console.log(error);
             })
    }


    render(){

        const {advice} = this.state

        return(
            <div className="app">
                <div className="card">
                     <h1 className="heading">{advice}</h1>
                </div>
            </div>
        )
    }
}

export default App;