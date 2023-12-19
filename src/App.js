import './App.css';
import {useEffect} from "react";

const tg = window.Telegram.WebApp

function App() {
    useEffect(() => {
        tg.ready();
    }, [])

    const close = () => {
        tg.close();
    }

    return (
        <div className="App">
            <h1>Hello world</h1>

            <button onClick={close}>Закрыть</button>
        </div>
    );
}

export default App;
