import HomePage from "./pages/home";
import NewResource from "./pages/newResource";
import ToDoList from "./pages/toDoList";
import { useState } from "react";
import { IUser } from "./interfaces";

function App(): JSX.Element {
  const [user, setUser] = useState<IUser>({
    userid: 1,
    username: "katrina",
    status: "student",
  });

  return (
    <div>
      <HomePage />
      <NewResource usernameid={user.userid} />
      <ToDoList />
    </div>
  );
}

export default App;
