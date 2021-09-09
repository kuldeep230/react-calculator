import "./NumButtons.css";

const NumButtons = (props) => {
  const isNotOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  return (
    <div
      className={`numButtons-wrapper ${
        isNotOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default NumButtons;
