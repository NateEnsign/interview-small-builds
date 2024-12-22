import "./App.css";
import GoalsApp from "./components/goals-app/GoalsApp";
import ToDo from "./components/to-do-list/toDo";
import GirlsKissed from "./components/kiss-app/GirlsKissed";
import BooksRead from "./components/books-app/BooksRead";

function App() {
  return (
    <>
      <BooksRead />
      <GirlsKissed />
      <GoalsApp />
      <ToDo />
    </>
  );
}

export default App;
