import HomePage from "./Pages/Home";
import NewResource from "./Pages/NewResource";
import ToDoList from "./Pages/ToDoList";
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
