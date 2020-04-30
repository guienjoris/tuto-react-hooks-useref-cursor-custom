import React, {useRef} from 'react';
import './App.css';

function App() {
  let curseurRef = useRef();
  const mousePos = e =>{
    curseurRef.current.setAttribute('style',`top:${e.pageY -20 }px; left:${e.pageX -20 }px;`) // e.pageY et e.pageX pour que la div ref {curseurRef} suivent la souris, -20 pour que ce soit centré  
  }
  return (
    <div onMouseMove={mousePos}className="App"> 
      <div ref={curseurRef}
      className="curseur-perso">

      </div>
      <h1>
        lorem ipsum
      </h1>
    </div>
  );
}

export default App;

/* 
 OnMouseMove attribut qui sert a détecter quand la souris bouge et déclencher la fonction mousePos qui détecte l'event et renvoi un objet utilisable avec useRef();
*/