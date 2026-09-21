import './App.css';
import Flashcard, { cards } from './components/Flashcard';

const App = () => {

  return (
    <div className="App">
      <h1>🇷🇺 Russian Drill Sergeant 🇷🇺</h1>
      <h2>How many Russian words and phrases do you have memorized?</h2>
      <h4>Say each Russian word or phrase out loud for extra practice!</h4>
      <h6>Total Number of Cards: {cards.length}</h6>
      <Flashcard />
    </div>
  )
}

export default App