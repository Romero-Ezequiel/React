import React from 'react';
import ReactDOM from 'react-dom';
//voy a importar el componente app y luego renderizar ese componente
import App from './App';
import * as serviceWorker from './serviceWorker';

//Aca voy a renderizar el componente app utilizando JSX dentro del id root
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
