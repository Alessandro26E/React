import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  const [sinal, setSinal] = useState("");
  const [result, setResult] = useState(0);
  const [conta, setConta] = useState("");

  useEffect(
    () => {
      if (!sinal) {
        setConta(number);
      } else {
        setConta(oldNumber + sinal);
      }
      if (number !== 0 && sinal) {
        setConta(oldNumber + sinal + number);
      }
    },
    [number],
    [oldNumber],
    [sinal],
    [result]
  );

  function Calculator(event) {
    const input = event.target.value;
    if (number === 0) {
      setNumber(input);
      setConta(input);
    } else {
      setNumber(number + input);
    }
  }

  function setOperator(event) {
    const input = event.target.value;

    if (!sinal) {
      setSinal(input);
      setOldNumber(number);
      setNumber(0);
    } else {
      setSinal(input);
    }

    if (sinal && result && oldNumber) {
      setSinal(input);
      setOldNumber(result);
      setNumber(0);
    }
  }

  function Calcular() {
    if (!number && !oldNumber && !sinal) return;
    let resultado;

    switch (sinal) {
      case "+":
        resultado = Number(number) + Number(oldNumber);
        break;

      case "/":
        resultado = Number(oldNumber) / Number(number);
        break;

      case "-":
        resultado = Number(oldNumber) - Number(number);
        break;

      case "*":
        resultado = Number(oldNumber) * Number(number);
        break;

      case "%":
        resultado = Number(oldNumber) / 100;
        break;
    }

    setResult(resultado);

    if (sinal !== "%") {
      setConta(oldNumber + sinal + number + " = " + resultado);
    } else {
      console.log(resultado);
      setConta(oldNumber + sinal + " = " + resultado);
    }
  }

  function clear() {
    setNumber(0);
    setOldNumber(0);
    setSinal("");
    setConta(number);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="bg-[#1b1b1b] w-[350px] h-[500px] rounded-3xl flex justify-center flex-col items-center gap-3 ">
        <h1
          id="h1text"
          className="bg-[#2c2c2c] w-[340px] h-[70px] rounded-[15px] flex items-center text-4xl justify-end p-1 text-white font-bold"
        >
          {conta}
        </h1>

        <div className="w-[90%] h-[400px] grid grid-cols-4 justify-center">
          <button onClick={setOperator} value="+">
            +
          </button>
          <button onClick={setOperator} value="-">
            -
          </button>
          <button onClick={setOperator} value="%">
            %
          </button>
          <button onClick={setOperator} value="*">
            x
          </button>
          <button onClick={setOperator} value="/">
            ÷
          </button>
          <button onClick={Calculator} value={"."}>
            ,
          </button>
          <button onClick={Calculator} value={1}>
            1
          </button>
          <button onClick={Calculator} value={2}>
            2
          </button>
          <button onClick={Calculator} value={3}>
            3
          </button>
          <button onClick={Calculator} value={4}>
            4
          </button>
          <button onClick={Calculator} value={5}>
            5
          </button>
          <button onClick={Calculator} value={6}>
            6
          </button>
          <button onClick={Calculator} value={7}>
            7
          </button>
          <button onClick={Calculator} value={9}>
            9
          </button>
          <button onClick={Calculator} value={0}>
            0
          </button>
          <button onClick={Calcular}>=</button>
          <button onClick={clear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
