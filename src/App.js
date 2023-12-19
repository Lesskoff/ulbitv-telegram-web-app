import './App.css';
import {useEffect} from "react";
import useTelegram from "./hooks/useTelegram";
import Header from "./components/Header/Header";

function App() {
    const {tg, toggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <button onClick={toggleButton}>Toggle</button>
        </div>
    );
}

export default App;
