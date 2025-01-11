import "./App.css";
import GoalsApp from "./components/goals-app/GoalsApp";
import ToDo from "./components/to-do-list/toDo";
import GirlsKissed from "./components/kiss-app/GirlsKissed";
import PlacesVisited from "./components/countries-app/PlacesVisited";
import PeaksClimbed from "./components/peaks-app/PeaksClimbed";
import BooksRead from "./components/books-app/BooksRead";

function App() {
  return (
    <>
      <BooksRead />
      <PeaksClimbed />
      <GirlsKissed />
      <PlacesVisited />
      <GoalsApp />
      <ToDo />
    </>
  );
}

export default App;
