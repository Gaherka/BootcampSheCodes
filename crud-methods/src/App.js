import logo from './logo.svg';
import './App.css';
import Get from './Components/Get';
import Post from './Components/Post';
import Put from './Components/Put';
import Delete from './Components/Delete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>She Codes 2</h1>
          <Get />
          <Post />
          <Put />
          <Delete />
      </header>
    </div>
  );
}

export default App;
