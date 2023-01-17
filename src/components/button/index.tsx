import { ButtonProps } from "../../interfaces";

const Button = (props: ButtonProps) => {
  const { name, bgColor, color, size, action } = props;
  console.log("props", props);

  return (
    <button
      onClick={action}
      style={
        size == "lg"
          ? {
              border: "none",
              width: "100%",
              backgroundColor: bgColor ? bgColor : "inherit",
              color: color ? color : "inherit",
            }
          : size == "md"
          ? {
              border: "none",
              width: "70%",
              backgroundColor: bgColor ? bgColor : "inherit",
              color: color ? color : "inherit",
            }
          : size == "sm"
          ? {
              border: "none",
              width: "50%",
              backgroundColor: bgColor ? bgColor : "inherit",
              color: color ? color : "inherit",
            }
          : {}
      }
    >
      {name}
    </button>
  );
};

export default Button;
