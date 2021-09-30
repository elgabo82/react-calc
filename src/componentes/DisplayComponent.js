import React from "react";
import { useState } from "react";
import './DisplayComponent.css'; 

function DisplayComponent() {
    
    
    const [calculadora, setCalculadora] = useState("");    
    const [resultado, setResultado] = useState("");
    const operadores = [ '+', '-', '*', '/', '.' ];
  
    const actualizarCalculadora = valor => {
  
      if (operadores.includes(valor) && calculadora === '' ||      
        operadores.includes(valor) && operadores.includes(calculadora.slice(-1))
        ){
          return;
        }
  
      setCalculadora(calculadora + valor);
  
       if (!operadores.includes(valor)) {
          setResultado(eval(calculadora + valor).toString());       
      }
    }
  
    const ubicarNumeros = () => {
      const digitos = [];
  
      for (let i = 1; i < 10; i++) {
        digitos.push(
          <button onClick={() => actualizarCalculadora(i.toString())} key={i}>{i}</button>
        )
      }
  
      return digitos;
    }
  
    const calcular = () => {
      setCalculadora(eval(calculadora).toString()); // Calcula los valores almacenados
    }
  
    const limpiar = () => {
      setCalculadora(eval(0).toString()); // Pone los estados a 0
      setResultado(eval(0).toString());
    }
  
    const borrar = () => {
      if (calculadora ==='') {
        return;
      }
      const valor = calculadora.slice(0, -1); // elimina la última posición
  
      setCalculadora(valor);
    }


    return (
    <div className="calculadora">
        <div className="display">
          {resultado ? <span>({resultado})</span> : '' }&nbsp;       
          { calculadora || "0"}
        </div>        
        <div className="operadores">
            <button onClick={()=> actualizarCalculadora('+')}>+</button>
            <button onClick={()=> actualizarCalculadora('-')}>-</button>
            <button onClick={()=> actualizarCalculadora('*')}>*</button>
            <button onClick={()=> actualizarCalculadora('/')}>/</button>
            <button onClick={limpiar}>C</button>
            <button onClick={borrar}>DEL</button>
        </div>

        <div className="numeros">
            { ubicarNumeros() }
            <button onClick={()=> actualizarCalculadora('0')}>0</button>
            <button onClick={calcular}>=</button>
            <button onClick={()=> actualizarCalculadora('.')}>.</button>
        </div>
    </div>
    );


}

export { DisplayComponent };