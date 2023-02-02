import './styles/Question.css'
import AnswerButton from "./AnswerButton";

export default function Question(props) {
  let rawquestion = decodeString(props.question.question);
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
  }

  const answerButtons = allAnswers.map(answer => {
    return (
      <AnswerButton answer={answer.answer} isCorrect={answer.isCorrect} />
    )
  })

  return (
    <div className="question">
     <p>{question}</p>
      <div className="answers">
        {answerButtons}
      </div>
    </div>
  )

}