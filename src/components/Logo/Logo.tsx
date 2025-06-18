import PNG_LOGO from "../../assets/images/logo.png";

export const Logo = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <img
      width={48}
      height={48}
      src={PNG_LOGO}
      alt="logo"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};
