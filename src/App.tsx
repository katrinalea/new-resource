import HomePage from "./pages/home";
import NewResource from "./pages/newResource";
import ToDoList from "./pages/toDoList";

function App(): JSX.Element {
  return (
    <div>
      <HomePage />
      <NewResource />
      <ToDoList />
    </div>
  );
}

export default App;
