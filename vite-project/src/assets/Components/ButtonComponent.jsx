const ButtonComponent = ({ clickHandle, label }) => {
  return <button onClick={clickHandle}>{label}</button>;
};

export default ButtonComponent;
