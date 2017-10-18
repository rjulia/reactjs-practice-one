import React from 'react';
import ReactDOM from "react-dom";


class Layaout extends React.Component {
    render() {
        return(
            <h1> Hola mundos 2</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layaout/>, app)