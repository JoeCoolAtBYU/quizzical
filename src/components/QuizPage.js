import BabyBlue from "../images/blue.svg";
import Yellow from "../images/yellow.svg";
import {useState, useEffect} from "react";
import Question from "./Question";

export default function QuizPage(){
  const[quizQuestions, setQuizQuestions] = useState([])

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&encode=url3986")
      .then((response) => response.json())
      .then((questions) => {
        console.log(questions.results)
        setQuizQuestions(questions.results)
      })

  }, [])


  const questions = quizQuestions.map(question => {
    return (<Question question={question.question}/>)
  })

  return(
    <div className="main">
      <span id="clip" className="blob">
        <img src={BabyBlue} alt={`blue asymetrical shape`}/>
      </span>
      <span className="blob2">
        <img src={Yellow} alt={`blue asymetrical shape`}/>
      </span>
      <span className="blob2"/>
      <h1>Quiz Page</h1>
      <div className={`question-container`}>
        {questions}
      </div>
    </div>

  )

}