import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import FileUpload from './components/FileUploader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <img src={logo} className="App-logo" alt="logo" />
        <FileUpload />
      </header>
    </div>
  );
}

export default App;
