import './styles/Question.css'
import AnswerButton from "./AnswerButton";

export default function Question(props) {

  function styles(answer, index) {
    if (props.showAnswers === true) {
      if (props.question.correctAnswer === answer) {
        return ({backgroundColor: "#94D7A2"})
      }
      else if (props.question.selectedAnswer === index) {
        return ({backgroundColor: "#F8BCBC"})
      }
      else {
        return ({backgroundColor: "#F5F7FB"})
      }
    }
    else {
      return (props.question.selectedAnswer === index ? {backgroundColor: "#D6DBF5"} : {backgroundColor: "#F5F7FB"})
    }
  }

  const answerButtons = props.question.answers.map((answer, index) => {
    return (<AnswerButton
        key={index}
        answer={decodeString(answer)}
        onClick={(event) => {
          props.selectAnswer(event, props.question.id, index)
        }}
        style={styles(answer, index)}
        disabled={props.showAnswers}
      />
    )

  })

  function decodeString(string){
    return JSON.stringify(decodeURIComponent(string)).replaceAll("\"", "")
      .replaceAll("\\", "\"");
  }

  return (
    <div className="question">
      <p>{decodeString(props.question.question)}</p>
      <div className="answers">
        {answerButtons}
      </div>
    </div>
  )

}

/*let rawquestion = decodeString(props.question.question);
  let question = rawquestion.replace(/\\/g, "");

  let incorrectAnswers = (props.question.incorrect_answers).map(item => {
    return {isCorrect: false, answer: decodeString(item)}
  });

  let allAnswers = shuffleArray([{isCorrect: true, answer: decodeString(props.question.correct_answer)}, ...incorrectAnswers]);

  function decodeString(string){
    return JSON.stringify(decodeURIComponent(string)).replaceAll("\"", "");
  }

  function shuffleArray(array) {
    let newArray = array;
    let currentIndex = newArray.length, randomIndex;

    //While there remain elements to shuffle.
    while (currentIndex !== 0) {
      //Pick remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      //Swap it iwth the current element.
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
  }*/