import BabyBlue from "../images/blue.svg";
import Yellow from "../images/yellow.svg";

export default function QuizPage(){
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
    </div>

  )

}