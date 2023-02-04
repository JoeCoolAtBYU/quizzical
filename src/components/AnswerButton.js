import "./styles/AnswerButton.css"

export default function AnswerButton(props){

  return(
    <div onClick={props.onClick} style={props.style} className="answerButton">
      {props.answer}
    </div>

  )

}