import React from 'react';
import ReactDOM from "react-dom";


class Layaout extends React.Component {

    constructor(){
        super();
        this.nombre = 'Ramón Julia'
    }
    obternerLugarNacimiento(){
        return "Barcelona"
    }
    render() {
        return(
            <h1> Hola mundo, soy {this.nombre} de {this.obternerLugarNacimiento()}</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layaout/>, app)