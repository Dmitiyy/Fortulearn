import { useState } from "react"
import { questionsDb } from "./questionsDb"

export const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(1);

  const openQuestion = (number: number) => setActiveQuestion(number);

  return (
    <div className="questions" id='questions'>
      <h1>Questions</h1>
      <p>Frequently asked questions</p>
      <div className="questions__container">
        <ul className='questions__wrap-items'>
          {
            questionsDb.map((item, i) => {
              return (
                <li 
                className={activeQuestion === i ? 'home_questions_active' : ''} 
                key={item.id}
                onClick={() => openQuestion(i)}>
                  {item.question}
                </li>
              )
            })
          }
        </ul>
        <div className='questions__wrap-descr'>
          <p>{questionsDb[activeQuestion].answer}</p>
        </div>
      </div>
    </div>
  )
}