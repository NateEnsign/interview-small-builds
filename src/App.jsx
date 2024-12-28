import "./App.css";
import GoalsApp from "./components/goals-app/GoalsApp";
import ToDo from "./components/to-do-list/toDo";
import GirlsKissed from "./components/kiss-app/GirlsKissed";
import BooksRead from "./components/books-app/BooksRead";
import PeaksClimbed from "./components/peaks-climbed/PeaksClimbed";
import PlacesTraveled from "./components/travel-app/PlacesTraveled";

function App() {
  return (
    <>
      <GoalsApp />
      <PlacesTraveled />
      <PeaksClimbed />
      <BooksRead />
      <GirlsKissed />
      <ToDo />
    </>
  );
}

export default App;
