import { Logo } from "../Logo/Logo";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      Новостной портал
    </header>
  );
};
