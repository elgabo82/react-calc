
import "./index.css";

import { useState } from 'react';

function App() {

  const [calculadora, setCalculadora] = useState("");
  const [resultado, setResultado] = useState("");

  const operadores = [ '+', '-', '*', '/', '.' ];

  const actualizarCalculadora = valor => {
    setCalculadora(calculadora + valor);
  }

  const ubicarNumeros = () => {
    const digitos = [];

    for (let i = 1; i < 10; i++) {
      digitos.push(
        <button key={i}>{i}</button>
      )
    }

    return digitos;
  }

  return (
    <div className="App">
      <div className="calculadora">
        <div className="display">
          {resultado ? <span>(0)</span> : '' } { calculadora || "0"}
        </div>

        <div className="operadores">
          <button onClick={()=> actualizarCalculadora('+')}>+</button>
          <button onClick={()=> actualizarCalculadora('-')}>-</button>
          <button onClick={()=> actualizarCalculadora('*')}>*</button>
          <button onClick={()=> actualizarCalculadora('/')}>/</button>
          <button onClick={()=> actualizarCalculadora('c')}>C</button>
        </div>

        <div className="numeros">
          { ubicarNumeros() }
          <button>0</button>
          <button>=</button>
          <button>.</button>
        </div>

      </div>

    </div>
  );
}

export default App;
