import BabyBlue from "../images/blue.svg";
import Yellow from "../images/yellow.svg";
import {useEffect, useState} from "react";
import Question from "./Question";
import "./styles/QuizPage.css"
import {nanoid} from "nanoid";

export default function QuizPage() {
  const [quizQuestions, setQuizQuestions] = useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&encode=url3986")
      .then((response) => response.json())
      .then((questions) => {
        setQuizQuestions(questions.results.map(question => {
          return (
            {
              id: nanoid(),
              question: question.question,
              answers: question.incorrect_answers.concat([question.correct_answer]).map(value => ({value, sort: Math.random()})).sort(
                (a, b) => a.sort - b.sort).map(({value}) => value),
              selectedAnswer: undefined,
              correctAnswer: question.correct_answer
            }
          )
        }))
      })

  }, [])

  function selectAnswer(event,quest_id, option_id){
    setQuizQuestions(prev =>{
      return(prev.map(function (quest,qid){
        if(quest_id===quest.id){
          return({...quest, selectedAnswer:option_id})
        } else {
          return (quest)
        }
      }))
    })
  }

  const questions = quizQuestions.map(question => {
    let keyId = nanoid();
    return (<div>
      <Question
        key={keyId}
        question={question}
        showAnswers={false}
        selectAnswer={selectAnswer}
      />
      <hr/>
    </div>)
  })

  return (
    <div className="main">
      <span id="clip" className="blob">
        <img src={BabyBlue} alt={`blue asymmetrical shape`}/>
      </span>
      <span className="blob2">
        <img src={Yellow} alt={`blue asymmetrical shape`}/>
      </span>
      <span className="blob2"/>
      <div className={`question-container`}>
        {questions}
      </div>
      <div className="checkAnswersBtn">Check Answers</div>

    </div>


  )

}