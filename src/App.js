import './App.css';
import WelcomPage from "./components/QuizPage";

function App() {
  return (
    <div className="App">
      <WelcomPage start={()=>{console.log(`Game started`)}}/>
    </div>
  );
}

export default App;
