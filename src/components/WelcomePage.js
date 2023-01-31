export default function WelcomPage(props){
  return (
    <div className="main">
      <h1>Quizzical</h1>
      <h3>This is a game to test your trivia skills</h3>
      <button className="start-btn" onClick={props.start}>Start Game</button>
    </div>
  )
}