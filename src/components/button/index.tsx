import { ButtonProps } from "../../interfaces";

const Button = (props: ButtonProps) => {
  const { name, color, size, action } = props;
  console.log("props", props);

  return (
    <button
      onClick={action}
      style={
        size == "lg"
          ? {
              border: "none",
              width: "100%",
              backgroundColor: "inherit",
              color: "inherit",
            }
          : size == "md"
          ? {
              border: "none",
              width: "70%",
              backgroundColor: "inherit",
              color: "inherit",
            }
          : size == "sm"
          ? {
              border: "none",
              width: "50%",
              backgroundColor: "inherit",
              color: "inherit",
            }
          : {}
      }
    >
      {name}
    </button>
  );
};

export default Button;
