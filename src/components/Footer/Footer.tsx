import s from "./Footer.module.scss";

export const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className={s.footer}>Все права защищены © {year}</footer>;
};
