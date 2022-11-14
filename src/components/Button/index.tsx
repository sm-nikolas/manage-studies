import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
  description: string;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.button}>
        {this.props.description}
      </button>
    );
  }
}

export default Button;