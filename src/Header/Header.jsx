import React from 'react';
import Button from "../Button/Button";

const Header = () => {
    const tg = window.Telegram.WebApp

    const close = () => {
        tg.close();
    }

    return (
        <header className={'header'}>
            <Button onClick={close}>Закрыть</Button>
            <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
        </header>
    );
};

export default Header;