import './App.css';
import {useEffect} from "react";
import useTelegram from "./hooks/useTelegram";
import Header from "./components/Header/Header";

const tg = window.Telegram.WebApp

function App() {
    const {tg, toggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    const close = () => {
        tg.close();
    }

    return (
        <div className="App">
            <Header />
            <button onClick={toggleButton}>Toggle</button>
        </div>
    );
}

export default App;
