import './App.css';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter start_value={10} max_value={100} min_value={0}/>
      </header>
    </div>
  );
}

export default App;
