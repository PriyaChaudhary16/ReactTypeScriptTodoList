import './App.css';
// import Button from './components/Button';
// import Greet from './components/Greet';
// import Input from './components/Input';
// import Person from './components/Person';
// import PersonList from './components/PersonList';
import ToDo from './components/toDo/ToDo';

// interface AppProps {
//   buttonHandler: () => void;
// }

function App() {
  // const personName = {
  //   first : "Rocky",
  //   last : "Wayne"
  // }
  // const nameList = [
  //   {
  //     first : "Rocky",
  //     last : "Wayne"
  //   },
  //   {
  //     first : "Rashmi",
  //     last : "Win"
  //   },
  //   {
  //     first : "Kitti",
  //     last : "Jain"
  //   },
  // ]
  return (
    <div className="App" data-testid="app-container">

      <ToDo />

      {/* learn react
      <Greet name={"Priya"} msgCount={10} isLogedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Button handleClick = {(event, id)=>{
        console.log("Button clicked", event, id)
      }} />
      <Input value='' handleChange={(event)=>console.log(event)} />

      <button data-testid="app-button" onClick={buttonHandler}>
        Click me
      </button> */}
    </div>
  );
}

export default App;
