import BabyBlue from "../images/blue.svg";
import Yellow from "../images/yellow.svg";
import {useEffect, useState} from "react";
import Question from "./Question";
import "./styles/QuizPage.css"
import {nanoid} from "nanoid";

export default function QuizPage(props) {
  const [quizQuestions, setQuizQuestions] = useState([])
  const [complete, setComplete] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)
  const [score, setScore] = useState(0);

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

  useEffect(() => {
    setComplete(quizQuestions.every(quest => {
      return typeof quest.selectedAnswer !== 'undefined'
    }))
  }, [quizQuestions])

  useEffect(() => {
    let count = 0;
    for (let x = 0; x < quizQuestions.length; x++) {
      if (typeof quizQuestions[x].selectedAnswer !== 'undefined') {
        if (quizQuestions[x].answers[quizQuestions[x].selectedAnswer] === quizQuestions[x].correctAnswer) {
          count++;
        }
      }
    }
    setScore(count);
  }, [showAnswers])


  function checkAnswers() {
    setShowAnswers(true)
  }

  function selectAnswer(event, quest_id, option_id) {
    setQuizQuestions(prev => {
      return (prev.map(function (quest, qid) {
        if (quest_id === quest.id) {
          return ({...quest, selectedAnswer: option_id})
        }
        else {
          return (quest)
        }
      }))
    })
  }

  function playAgain() {
    setShowAnswers(false)
    setComplete(false)
    console.log(props)
    props.start()

  }

  const questions = quizQuestions.map(question => {
    let keyId = nanoid();
    return (<div>
      <Question
        key={keyId}
        question={question}
        showAnswers={showAnswers}
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
      {showAnswers ?
        <div>
          <h3 className="score"> {`You scored ${score} / 5 correct answers.`}</h3>
          <button className={"button"} onClick={playAgain}>Play Again</button>
        </div>

        : <button className="checkAnswersBtn" disabled={!complete} onClick={checkAnswers}>Check Answers</button>
      }

    </div>


  )

}