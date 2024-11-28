import './App.css';
import AddPlayer from './components/AddPlayer';
import GameFlow from './components/GameFlow';
import ScoreBoard from './components/ScoreBoard';

function App() {  

  return (
    <div className="App">
        <AddPlayer />
        <GameFlow />
        <ScoreBoard />
    </div>
  );
}

export default App;

// <div dangerouslySetInnerHTML={{__html: content}}></div>
