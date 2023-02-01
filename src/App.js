import './App.css';
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div className="App">
      <WelcomePage start={()=>{console.log(`Game started`)}}/>
    </div>
  );
}

export default App;
