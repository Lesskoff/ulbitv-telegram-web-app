import React from "react";
import Button from "../Button/Button";
import useTelegram from "../../hooks/useTelegram";
import "./Header.css";

const Header = () => {
  const { user, onClose, onToggleButton } = useTelegram();

  return (
    <header className={"header"}>
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{user?.username}</span>
      <Button onClick={onToggleButton}>Toggle</Button>
    </header>
  );
};

export default Header;
