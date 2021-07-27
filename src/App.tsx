import React from 'react';

import './styles/App.scss';
import {Landing} from './components/Landing'
import { Form } from './components/Form';

//data

import './services/data.json';
import './services/getDataFromAPi'
var mensaje:string = "Hola probando la consola";
console.log(mensaje);



function App() {
  return (
      
    <div className="App">
       
      <header className="App-header">
            <h2>Busca tu destino....</h2>
         
          <Form></Form>
      
      </header>
      <button className="classBtn-Container classBtn" >
      <i className="fas fa-trash"></i> Borrar Búsqueda
      </button>

      <footer className="footer">
      <a
         
         href="https://github.com/MarinaBsanz"
         target="_blank"
         rel="noopener noreferrer"
       >
         More info about me:
       </a>
      <a href="https://www.linkedin.com/in/marina-ben%C3%ADtez-s%C3%A1nchez-0214a059/">
        Marina BSánchez{" "}
      </a>
    </footer>
   
  

    </div>
  );
}

export default App;
