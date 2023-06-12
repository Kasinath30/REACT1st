
import React from 'react' ;

function App(props) { 
  const{name} = props ;
  return (
    <div className="App">
      <header className="App-header"> 
        
        <p>
          Edit{name} <code>ok</code> Manam
        </p> 
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 
const Welcome = () => {
  <App name="Rahul" />
}


export default App;
