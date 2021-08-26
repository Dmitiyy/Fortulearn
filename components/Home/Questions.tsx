import { useState } from "react"
import { QuestionsBlock, QuestionsContainer, QuestionsWrapDescription, QuestionsWrapItems } from "../../styles/HomeStyledModules/HomeQuestions.module"
import { questionsDb } from "./questionsDb"

export const Questions = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(1);

  const openQuestion = (number: number) => setActiveQuestion(number);

  return (
    <QuestionsBlock id='questions'>
      <h1>Questions</h1>
      <p>Frequently asked questions</p>
      <QuestionsContainer>
        <QuestionsWrapItems>
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
        </QuestionsWrapItems>
        <QuestionsWrapDescription>
          <p>{questionsDb[activeQuestion].answer}</p>
        </QuestionsWrapDescription>
      </QuestionsContainer>
    </QuestionsBlock>
  )
}