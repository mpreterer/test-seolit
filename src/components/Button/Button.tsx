import type { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";
import s from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={cn(s.button, className)} {...props}></button>;
};
