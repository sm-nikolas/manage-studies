import style from "./Button.module.scss";

interface Props {
  description?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ onClick, type, description }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {description}
    </button>
  );
}

export default Button;
