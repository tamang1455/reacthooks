import logo from './logo.svg';
import './App.css';
import Increment from './Increment';
import Decrement from './Decrement';
import Datafetch from './Datafetch';

function App() {
  return (
    <div className="App">
      <Increment/>
      <Decrement/>
      <Datafetch/>
    </div>
  );
}

export default App;
