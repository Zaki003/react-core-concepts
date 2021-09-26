import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Person name="Zaki" job="Student" age='23'></Person>
      <Person name="Drizzle" job="Teacher" age='21'></Person>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
      <h4>Proffession: {props.job}</h4>
    </div>
  );
}

export default App;
