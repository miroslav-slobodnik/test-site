import './App.css';
import './component/Clock'
import Clock from './component/Clock';

 const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Miroslav and Alzbetka :)</h1>
        <Clock />
      </header>
    </div>
  );
};

export default App;