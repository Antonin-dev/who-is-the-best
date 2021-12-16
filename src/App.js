import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./HomePage/HomePage"
import Login from "./Login/Login";
import {useState} from "react";
import Question from "./Question/Question";
import RankContainer from "./Components/Ranking/RankContainer";
import Result from "./Result/Result";

function App() {
    const [name, setName] = useState(null);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Login setName={setName}/>}/>
                <Route path="/question/:id" element={<Question name={name}/>}/>
                <Route path="/rank" element={<RankContainer/>}/>
                <Route path="/result" element={<Result name={name}/>}/>
            </Routes>
        </div>
    );
}

export default App;
