import React from "react";

const InputComponent = ({ type, value, onChangeInput }) => {
  return <input type={type} value={value} onChange={onChangeInput}></input>;
};

export default InputComponent;
