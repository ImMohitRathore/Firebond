import React, { useEffect, useState } from "react";

const ArgumentSelect = ({ callback }) => {
  const [data1, setdata1] = useState([]);

  function changess(e, call) {
    console.log("dddddd", e.target.value);
    if (call == "argInput") {
      localStorage.setItem("cureentOption", e.target.value);
    }
    setTimeout(() => {
      fetchData();
    }, 100);
  }

  const fetchData = () => {
    const data = localStorage.getItem("argumentData");
    const inputData = JSON.parse(data);
    // console.log("input Data", inputData);

    setdata1(inputData);

    if (inputData.length == 1 && inputData[0].inputValue == true) {
      localStorage.setItem("cureentOption", inputData[0].inputName);
      callback(inputData[0].inputValue);
    }
  };

  useEffect(() => {
    fetchData();
    const addArg = document.getElementById("AddArg");
    addArg?.addEventListener("click", (e) => {
      changess(e, "addArg");
    });
  }, []);

  useEffect(() => {
    data1.forEach((ele) => {
      var argselect = document.getElementById(`argSelect_${ele.id}`);
      var argInput = document.getElementById(`argInput_${ele.id}`);

      argInput?.addEventListener("change", (e) => {
        changess(e, "argInput");
      });
      //   console.log("input:::", argInput);

      const handleChangeInSelect = (inputvalue, argInput) => {
        return function (e) {
          let currentOption = localStorage.getItem("cureentOption");
          console.log("cc", inputvalue, argInput, "e.target.value");

          const updatedData = [...data1];

          const objectToUpdate = updatedData.find(
            (obj) => obj.inputName === argInput
          );

          console.log("objectToUpdate::", objectToUpdate);
          // Check if the object exists
          if (objectToUpdate) {
            // Update the value of the object
            objectToUpdate.inputValue = e.target.value;

            // Set the modified array back into the state
            setdata1(updatedData);
            if (inputvalue == currentOption) {
              callback(e.target.value);
            }
            console.log("callll", e.target.value);
          }
        };
      };

      argselect.addEventListener(
        "change",
        handleChangeInSelect(argInput.value, argInput.value)
      );
    });
  }, [data1]);

  const handleSelectChange = (event) => {
    const id = event.target.value;
    const data = data1.filter((ele) => {
      return id == ele.id;
    });

    // setCurrentOption('dsgsdf')
    localStorage.setItem("cureentOption", data[0].inputName);
    console.log("Selected Option Key:", data[0]);
    // setCurrentOption(data[0].inputName)
    callback(data[0].inputValue);
    // Perform any desired action with the selected option key
  };

  return (
    <>
      <select name="" id="" onChange={handleSelectChange}>
        {data1?.map((ele) => {
          return (
            <option key={ele.id} value={ele.id}>
              {ele.inputName}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default ArgumentSelect;
