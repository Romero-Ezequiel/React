import React from 'react';

export default function Saludar(props){
    console.log(props);
    console.log(props.nombre);
    const {nombre, apellido} = props;
    return(
        <div>
            <h1>Utilizando props</h1>
            {props.nombre}
            <p>Hola {nombre}, {apellido} como estas?</p>
        </div>
    )
}

//export default Saludar;