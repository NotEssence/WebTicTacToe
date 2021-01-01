import './App.css';
import { useState } from 'react';

function Move(props) {
  return (
    <div class="
      inline-block bg-gray-800 text-gray-100 p-6 font-extrabold text-3xl
      rounded-sm hover:shadow-2xl hover:bg-pink-500 transform hover:-translate-y-2
      transition duration-500
    " onClick={props.click}>
      {props.move}!
    </div>
  )
}

function Scores(props) {
  return (
    <ul class="space-x-16 text-3xl text-gray-100 font-extrabold flex justify-center my-10">
      <div>
        {props.player}
      </div>
      <div>
        {props.ai}
      </div>
    </ul>
  )
}

function App() {
  const [playerScore, setPlayerScore] = useState(0)
  const [aiScore, setAiScore] = useState(0)

  const detectWin = (player) => {
    const moves = ['rock', 'pape', 'cutt']
    const ai = moves[Math.floor(Math.random() * moves.length)]

    if (player === ai) {
      alert('TIE!')
    } else if (player === 'rock' && ai === 'cutt') {
      alert(`WIN rock vs ${ai}`)
      setPlayerScore(playerScore + 1)
    } else if (player === 'pape' && ai === 'rock') {
      alert(`WIN pape vs ${ai}`)
      setPlayerScore(playerScore + 1)
    } else if (player === 'scissors' && ai === 'pape') {
      alert(`WIN cutt vs ${ai}`)
      setPlayerScore(playerScore + 1)
    } else {
      alert(`LOSE ${player} vs ${ai}`)
      setAiScore(aiScore + 1)
    }
  }

  return (
    <div class="App">
      <Scores player={playerScore} ai={aiScore} />

      <ul class="space-x-32 flex justify-center">
        <Move click={() => detectWin('rock')} move='Rock'/>
        <Move click={() => detectWin('pape')} move='Pape'/>
        <Move click={() => detectWin('cutt')} move='Cutt'/>
      </ul>
    </div>
  )
}

export default App;
