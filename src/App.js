import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
	const [counter, setCounter] = useState(0)


	useEffect(()=>{
		console.log("counter changed", counter)
	}, [counter])

	function incrementCounter(){
		setCounter(counter+1)
	}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {counter > 4 ? <p> greater </p> : counter}
        </p>
        <button
          className="App-link"
          rel="noopener noreferrer"
		  onClick={incrementCounter}
        >
          {counter}
        </button>
      </header>
    </div>
  );
}

export default App;
