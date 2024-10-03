import { Counter } from './components/counter/counter.jsx'
import CounterButton from './components/button/CounterButton.jsx';
import { useState } from 'react'

function App() {

    const [count, setCount] = useState(0);
    const [numAnimation, setNumAnimation] = useState("");

    // Remove animation class after animation ends
    function handleAnimationEnd() {
    setNumAnimation("");
    };

    function increase() {
        setCount(count+1);
        setNumAnimation("move-up");
    }

    function decrease() {
        setCount(count-1);
        setNumAnimation("move-down");
    }

    return (
        <section>
            <div className="container">
                <CounterButton img={"../src/assets/icon/arrow_up.svg"} func={increase}/>
                <Counter count={count} animation={numAnimation} handleAnimationEnd={handleAnimationEnd}/>
                <CounterButton img={"../src/assets/icon/arrow_down.svg"} func={decrease}/>
            </div>
        </section>
    )
}

export default App
