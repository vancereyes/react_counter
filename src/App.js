import './App.css';
import CounterGroup from './Components/CounterGroup';



function App() {
  const size = 3;
  return (
    <div className="App">
      <header className="App-header">
      <CounterGroup size={size} />
      </header>
    </div>
  );
}

export default App;
