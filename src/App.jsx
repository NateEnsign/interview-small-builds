import "./App.css";
import GoalsApp from "./components/goals-app/GoalsApp";
import ToDo from "./components/to-do-list/toDo";
import GirlsKissed from "./components/kiss-app/GirlsKissed";

function App() {
  return (
    <>
      <GirlsKissed />
      <GoalsApp />
      <ToDo />
    </>
  );
}

export default App;
