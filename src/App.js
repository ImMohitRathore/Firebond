import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import PrimarySelectM from "./component/PrimarySelect";
import Argument from "./component/Argument";
import Constant from "./component/Constant";
import ArgumentSelect from "./component/ArgumentSelect";
import AndSelect from "./component/AndSelect";

function App() {
  const [result, setresult] = useState("undefined");
  const [primarySelect, setPrimarySelect] = useState();
  const [AndSelected , SetAndSelected] = useState()


  const callbackData = (data) => {
    console.log("data", data);
    setPrimarySelect(data);
    if (data == "constant") {
      setresult("false");
    }
  };

  const callbackData1 = (data) => {
    console.log("data", data);

    setresult(String(data));
  };


  const andCallBack =(data)=>{
    console.log("dddd" ,data);
    // SetAndSelected(true) ;
     setresult(data)
  }

  const PrimarySelectOption =()=>{
    return (
      <div className="inside-and">
      <PrimarySelectM key="primarySelectM" callback={callbackData} />
      <button
        onClick={() => {
          setPrimarySelect("");
          setresult("undefined");
        }}
      >
        X
      </button>
    </div>
    )
  }
  const FinalRender = () => {
    if (primarySelect == "constant" ) {
      return <Constant key="constant" callback={callbackData1} />;
    } else if (primarySelect === "argument" ) {
      return <ArgumentSelect key="argument" callback={callbackData1} />;
    } else if (primarySelect === "and"  ) {
      return (
        <div>
      
          {/* <br /> */}
          {/* <PrimarySelectOption/> */}
          <AndSelect callback={andCallBack} />
        </div>
      );
    } else {
      return <PrimarySelectM callback={callbackData} />;
    }
  };

  return (
    <>
      {/* for argiument  */}

      <Argument callback={callbackData1} />

      <br />
      <br />
      {
      primarySelect=='and'   ? <PrimarySelectOption/> : null
      }
      <FinalRender />

      {primarySelect != "and" ? (
        <button
          onClick={() => {
            setPrimarySelect("");
            setresult("undefined");
          }}
        >
          X
        </button>
      ) : null}
      <div className="result">result : {result}</div>
    </>
  );
}

export default App;
