import { useEffect, useState } from "react";
import PrimarySelectM from "./PrimarySelect";

const AndSelect = ({callback}) => {
  const [AndSelect, setAndSelect] = useState([
    {
      inputName: "My Arg",
      inputValue: true,
      id: 1,
    },
    {
      inputName: "My Arg",
      inputValue: true,
      id: 1,
    },
  ]);


  const callbackData = (data) => {
    // console.log("data", data);
    callback(data)
    // setPrimarySelect(data);
    // if (data == "constant") {
    //   setresult("false");
    // }
  };
  return (
    <div className="addselect">
      {AndSelect.map(() => {
        return (
          <>
          <div className="and_select">
                <PrimarySelectM callback={callbackData} />
            <button
              onClick={() => {
                //   setPrimarySelect("");
                //   setresult("undefined");
              }}
            >
              X
            </button>
          </div>
          </>
        );
      })}
    </div>
  );
};

export default AndSelect;
