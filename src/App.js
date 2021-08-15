import './App.css';
import RollDice from './RollDice';

function App() {
  return (
    <div className="App">
      <h1>Dice App</h1>
      <RollDice max={6}/>
    </div>
  );
}

export default App;
