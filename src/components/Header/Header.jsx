import React from 'react';
import Button from "../Button/Button";
import useTelegram from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose, onToggleButton} = useTelegram();

    return (
        <header className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>{user?.username}</span>
        </header>
    );
};

export default Header;