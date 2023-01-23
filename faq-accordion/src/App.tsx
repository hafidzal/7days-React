import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Faq Accordion</h1>
      <div className="card">
        { questions.map((q) => (
          <h4 className="question-box">{ q.title }</h4>
        )) }
      </div>
    </div>
  )
}

export default App
