//El componente app va ser el corazon de la aplicacion
import React from 'react';

/*Hay dos tipos de componentes, de clase y funcional
El componente de clase se utiliza la palabra reservada class el nombre del 
cocdmponente, luego extends esto es de herencia de POO y React.Component.

Vale aclarar que el unico metodo obligatorio en los componentes de clases
es el render() y dentro de este metodo vamos a renderizar el codigo que
se va a mostrar en el navegador. Hay otros metodos pero no son obligatorios
como el render() 
*/ 
class App extends React.Component(){
  render(){
    return(
      <div>
        <h1>Hola Mundoooo</h1>
      </div>
    )
  }
}

/*Cuando creamos un componente de clases hay que exportarlo, para luego poder
importarlo en index.js e insertarlo en el id='root' del html. Entonces se 
exportar haciendo lo siguiente: */

export default App;

//Componente funcional
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/