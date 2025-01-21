import "./App.css";
import GoalsApp from "./components/goals-app/GoalsApp";
import ToDo from "./components/to-do-list/toDo";
import PlacesVisited from "./components/countries-app/PlacesVisited";
import PeaksClimbed from "./components/peaks-app/PeaksClimbed";
import BooksRead from "./components/book-app/BooksRead";
import GirlsKissed from "./components/kiss-app/GirlsKissed";

function App() {
  return (
    <>
    <GirlsKissed />
      <BooksRead />
      <PeaksClimbed />
      <PlacesVisited />
      <GoalsApp />
      <ToDo />
    </>
  );
}

export default App;
