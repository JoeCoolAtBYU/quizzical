import './styles/Question.css'
import AnswerButton from "./AnswerButton";

export default function Question(props) {
  let rawquestion = JSON.stringify(decodeURIComponent(props.question));
  let question = rawquestion.replace(/\\/g, "");
  return (
      <div className="question">
        <h4>{question}</h4>
        <div className="answers">
          <AnswerButton answer="This is a test as longer test"/>
          <AnswerButton answer="This "/>
          <AnswerButton answer="This is"/>
          <AnswerButton answer="This is a"/>
          <AnswerButton answer="This is a test"/>
        </div>
    </div>
  )

}