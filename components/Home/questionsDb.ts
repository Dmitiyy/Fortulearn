interface IQuestion {
  question: string
  answer: string
  id: string 
}

export const questionsDb: Array<IQuestion> = [
  {
    question: 'Is it free or do I need to pay for something?',
    answer: 'It is totally free, if you want to be a teacher. If you want to be a student, you have to pay 5$ for one lesson.',
    id: 'id' + Math.random().toString(16).slice(2)
  },
  {
    question: 'How long does one lesson take?',
    answer: 'One lesson - one hour. If you want to spend more time, you can have more lessons per day. Just say this your partner and assign a new meeting.',
    id: 'id' + Math.random().toString(16).slice(2)
  },
  {
    question: 'How often can i join lessons?',
    answer: 'You can join the lessons whenever you want, or just follow the timetable provided by the author.',
    id: 'id' + Math.random().toString(16).slice(2)
  },
  {
    question: 'How much can i earn?',
    answer: 'It depends on you. You can make an impact on your income. But remember, one lesson - 5$.',
    id: 'id' + Math.random().toString(16).slice(2)
  }
];