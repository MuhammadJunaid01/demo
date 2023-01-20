import { ButtonProps } from "../../interfaces";

/* A function that takes in a parameter called props and it is of type ButtonProps. */
const Button = (props: ButtonProps) => {
  /* Destructuring the props object. */
  const { name, bgColor, color, size, action } = props;

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
