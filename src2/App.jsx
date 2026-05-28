import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Counter from "./Pages/Counter";

function App() {
    return (
        <div>
            <NavBar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/counter" element={<Counter/>}/>
            </Routes>
        </div>
    );
}

export default App;