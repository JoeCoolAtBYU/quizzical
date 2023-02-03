import './App.css';
import WelcomePage from "./components/WelcomePage";
import QuizPage from "./components/QuizPage";
import {useState} from "react";

function App() {
  const [isStarted, setIsStarted] = useState(false)

  function startGame() {
    setIsStarted(!isStarted);
  }

  return (
    <div className="App">
      {!isStarted ? <WelcomePage start={startGame}/> :
        <QuizPage />}
    </div>
  );
}

export default App;
