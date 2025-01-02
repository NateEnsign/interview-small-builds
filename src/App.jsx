import "./App.css";
import GoalsApp from "./components/goals-app/GoalsApp";
import ToDo from "./components/to-do-list/toDo";
import GirlsKissed from "./components/kiss-app/GirlsKissed";
import BooksRead from "./components/books-app/BooksRead";
import PlacesVisited from "./components/countries-app/PlacesVisited";
import PeaksClimbed from "./components/peaks-app/PeaksClimbed";

function App() {
  return (
    <>
      <PeaksClimbed />
      <GirlsKissed />
      <PlacesVisited />
      <GoalsApp />
      <BooksRead />
      <ToDo />
    </>
  );
}

export default App;
