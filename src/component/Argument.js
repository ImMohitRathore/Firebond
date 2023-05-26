import { useEffect, useState } from "react";


const Argument = ({ callback }) => {
    const [argNumber, setargNumber] = useState([
        {
          inputName: "My Arg",
          inputValue: true,
          id: 1,
        },
      ]);
    
  useEffect(() => {
    localStorage.setItem("argumentData", JSON.stringify(argNumber));
  }, []);
  const updateArgValue = () => {
    let id = argNumber.length + 1;
    let newVal = {
      inputName: "newarg",
      inputValue: true,
      id: id,
    };
    const newData = [...argNumber, newVal]; // Create a new array by spreading the existing data array and adding a new item
    localStorage.setItem("argumentData", JSON.stringify(newData));
    setargNumber(newData);
    // ArgumentSelect(newData)
    // localStorage.setItem("triggerFun", true);
  };

  const handleChange = (event, index, input) => {
    const updatedArgNumber = [...argNumber]; // Create a copy of the array

    if (input == "input") {
      updatedArgNumber[index].inputName = event.target.value; // Update the specific element
    } else {
      updatedArgNumber[index].inputValue = event.target.value;
    }

    setargNumber(updatedArgNumber); // Update the state with the modified array
    localStorage.setItem("argumentData", JSON.stringify(updatedArgNumber));

  };
  return (
    <>
      {argNumber.map((ele, index) => {
        // console.log("ele", ele);
        const argSelectId = `argSelect_${ele.id}`;
        const argInputId = `argInput_${ele.id}`;
        return (
          <>
            <div className="argval">
              <input
                type="text"
                name={ele.inputName}
                placeholder="My arg"
                id={argInputId}
                className="argInput"
                key={ele.id}
                value={ele.inputName}
                onChange={(event) => handleChange(event, index, "input")}
              />
              <select
                name=""
             
                id={argSelectId}
                onChange={(event) => handleChange(event, index, "select")}
                value={ele.inputValue}
              >
                <option value="true">true</option>
                <option value="false" selected>
                  false
                </option>
              </select>
            </div>
          </>
        );
      })}
      <button id="AddArg" onClick={updateArgValue}>
        Add argiument
      </button>
    </>
  );
};

export default Argument;
