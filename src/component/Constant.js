import { useState } from "react";
const Constant = ({callback}) => {
  return (
    <>
      <select
        name=""
        id=""
        onChange={(e) => {
          callback(e.target.value);
        }}
      >
        <option value="true">true</option>
        <option value="false" selected>
          false
        </option>
      </select>
    </>
  );
};


export default Constant