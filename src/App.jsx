import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      setDisplay(eval(display));
      // eval() function evaluates JavaScript code represented as a string and returns its completion value. But it has alot of risks
    } else if (value === "AC") {
      setDisplay("");

    } else if (value === "+/-") {
      setDisplay(display * -1);    
    } else {
      setDisplay(display + value);
    }
  };

  

  return (
    <div className="flex justify-center items-cente my-24">
      <div className="grid grid-cols-4 grid-rows-6  font-semibold text-[24px] overflow-auto">
        <div className="text-right col-span-4 bg-gray-300 p-4 text-3xl">
          {display}
        </div>
        <button
          onClick={() => handleClick("AC")}
          className="row-start-2  flex justify-center items-center border-gray-400 border size-20 "
        >
          AC
        </button>
        <button className="row-start-2 "
        onClick = {() => handleClick("+/-")}
        >+/-</button>
        <button
          onClick={() => handleClick("/100")}
          className="row-start-2  flex justify-center items-center border-gray-400 border size-20"
        >
          %
        </button>
        <button
          onClick={() => handleClick("/")}
          className="row-start-2  flex justify-center items-center border-gray-400  size-20 operation bg-orange-400 border text-white"
        >
          ÷
        </button>
        <button
          onClick={() => handleClick("*")}
          className=" flex justify-center items-center border-gray-400  size-20 operation bg-orange-400 border text-white"
        >
          X
        </button>
        <button
          onClick={() => handleClick("7")}
          className="row-start-3 ey flex justify-center items-center border-gray-400 border size-20"
        >
          7
        </button>
        <button
          onClick={() => handleClick("8")}
          className="row-start-3  flex justify-center items-center border-gray-400 border size-20"
        >
          8
        </button>
        <button
          onClick={() => handleClick("9")}
          className="row-start-3  flex justify-center items-center border-gray-400 border size-20"
        >
          9
        </button>
        <button
          onClick={() => handleClick("-")}
          className=" flex justify-center items-center border-gray-400  size-20 operation bg-orange-400 border text-white"
        >
          -
        </button>
        <button
          onClick={() => handleClick("4")}
          className="row-start-4  flex justify-center items-center border-gray-400 border size-20"
        >
          4
        </button>
        <button
          onClick={() => handleClick("5")}
          className="row-start-4  flex justify-center items-center border-gray-400 border size-20"
        >
          5
        </button>
        <button
          onClick={() => handleClick("6")}
          className="row-start-4  flex justify-center items-center border-gray-400 border size-20"
        >
          6
        </button>
        <button
          onClick={() => handleClick("+")}
          className=" operation bg-orange-400 border text-white"
        >
          +
        </button>
        <button
          onClick={() => handleClick("1")}
          className="row-start-5  flex justify-center items-center border-gray-400 border size-20"
        >
          1
        </button>
        <button
          onClick={() => handleClick("2")}
          className="row-start-5  flex justify-center items-center border-gray-400 border size-20"
        >
          2
        </button>
        <button
          onClick={() => handleClick("3")}
          className="row-start-5  flex justify-center items-center border-gray-400 border size-20"
        >
          3
        </button>
        <button
          onClick={() => handleClick("0")}
          className="border-gray-400 col-span-2 border"
        >
          0
        </button>
        <button
          onClick={() => handleClick(".")}
          className="col-start-3 row-start-6  flex justify-center items-center border-gray-400 border size-20"
        >
          .
        </button>
        <button
          onClick={() => handleClick("=")}
          className="col-start-4 row-start-6  flex justify-center items-center border-gray-400  size-20 operation bg-orange-400 border text-white"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
