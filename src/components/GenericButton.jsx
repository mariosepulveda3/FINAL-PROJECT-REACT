import React from "react";

const GenericButton = ({
  text,
  size,
  bgColor = "whitesmoke",
  textColor = "black",
  func,
  borderRadius,
  hover = true,
  fontSize = '1rem'
}) => {
  let width;

  switch (size) {
    case "xl":
      width = "400px";
      break;
    case "l":
      width = "300px";
      break;
    case "m":
      width = "200px";
      break;
    case 's':
      width = "150px";
      break;
    case 'xs':
      width = "100px";
      break;

    default:
      width = "50px";
  }

  const style = {
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: borderRadius,
    width: width,
    fontSize: fontSize
  };

  style.cursor = hover && "pointer";

  return (
    <button style={style} onClick={func}>
      {text}
    </button>
  );
};

export default GenericButton;
