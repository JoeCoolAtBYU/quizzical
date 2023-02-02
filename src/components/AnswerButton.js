import "./styles/AnswerButton.css"
import {useState} from "react";

export default function AnswerButton(props){
  const[isCorrect, setIsCorrect] = useState(props.isCorrect);


  return(
    <div className="answerButton">
      {props.answer}
    </div>

  )

}