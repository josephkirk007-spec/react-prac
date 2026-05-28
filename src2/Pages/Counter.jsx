import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className= "page">
            <h2> Counter Page </h2>

            <div className= "counter-box"> 
               <h1> Count: {count} </h1>

               <div className= "counter-buttons"> 
                 <button onClick= {() => setCount(count + 1)} > Increment </button>
                 <button onClick= {() => setCount(count - 1)} > Decrement </button>
                 <button onClick= {() => setCount(0)} > Reset </button>
                 </div>
            </div>
        </div>
    );
}

export default Counter;