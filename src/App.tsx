import React from 'react';

import './styles/App.scss';

//components 


//data

import './services/data.json';


function App() {
  return (
      
    <div className="App">
       
      <header className="App-header">
 
        <p className='CardPerson'>
          Hello World . I'm Marina and I'm Starting my first new project in TYpescript
          </p>
        <a
         
          href="https://github.com/MarinaBsanz"
          target="_blank"
          rel="noopener noreferrer"
        >
          More info about me
        </a>
      
      </header>




      <footer className="footer">
      <a href="https://www.linkedin.com/in/marina-ben%C3%ADtez-s%C3%A1nchez-0214a059/">
        Marina BSánchez{" "}
      </a>
    </footer>
   
  
    <button className="classBtn-Container classBtn" >
      <i className="fas fa-trash"></i> Borrar Búsqueda
    </button>

    </div>
  );
}

export default App;
