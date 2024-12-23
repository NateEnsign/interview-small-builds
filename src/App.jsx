import "./App.css";
import GoalsApp from "./components/goals-app/GoalsApp";
import ToDo from "./components/to-do-list/toDo";
import GirlsKissed from "./components/kiss-app/GirlsKissed";
import BooksRead from "./components/books-app/BooksRead";
import PeaksClimbed from "./components/peaks-climbed/PeaksClimbed";

function App() {
  return (
    <>
      <PeaksClimbed />
      <GoalsApp />
      <BooksRead />
      <GirlsKissed />
      <ToDo />
    </>
  );
}

export default App;
