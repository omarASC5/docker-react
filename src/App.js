import logo from './logo.svg';
import './App.css';

function App() {
  // dev/build: 
    // docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app containerHash
    // docker-compose up
  // tests:
    // solution 1: docker exec -it containerHashWithVolumes npm run test
    // solution 2: add it to docker-compose in a new service
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Asp.js</code> and save to reload.NAH
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

export default App;
