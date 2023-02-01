import './styles/WelcomPage.css'
import BabyBlue from '../images/blue.svg'
import Yellow from '../images/yellow.svg'

export default function WelcomPage(props){
  return (
    <div className="main">
      <span id="clip" className="blob">
        <img src={BabyBlue} alt={`blue asymetrical shape`}/>
      </span>
      <span className="blob2">
        <img src={Yellow} alt={`blue asymetrical shape`}/>
      </span>
      <span className="blob2"/>
      <h1>Quizzical</h1>
      <h3>This is a game to test your trivia skills</h3>
      <button className="start-btn" onClick={props.start}>Start Game</button>
    </div>
  )
}