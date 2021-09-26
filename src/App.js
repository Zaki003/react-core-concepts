import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {


  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className="person">
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
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
};

function Cinema(props) {
  return (
    <div className="person">
      <h1>Nayok: {props.nayok}</h1>
      <h2>Nayika: {props.nayika}</h2>
    </div>
  );
};

export default App;

/* const actors = [
  { nayok: "Jashim", nayika: "Sabrina" },
  { nayok: "Alomgir", nayika: "Shabana" },
  { nayok: "Razzak", nayika: "Shuchona" },
  { nayok: "Riaz", nayika: "Shabnur" }
]; */

{/* <Person name="Zaki" job="Student" age='23'></Person>
      <Person name="Drizzle" job="Teacher" age='21'></Person> */}
     /*  {
actors.map(actor => <Cinema nayok={actor.nayok} nayika={actor.nayika}></Cinema>)
}  */