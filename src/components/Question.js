import './styles/QuestionsPage.css'

export default function Question(props) {
  let rawquestion = JSON.stringify(decodeURIComponent(props.question));
  let question = rawquestion.replace(/\\/g, "");
  return (
    <div className={`questionPage`}>
      <div className={`questions`}>
        <h4>{question}</h4>
        <button>button1</button>
        <button>button2</button>
        <button>button3</button>
        <button>button4</button>
      </div>
    </div>
  )

}