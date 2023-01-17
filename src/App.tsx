import HomePage from "./Pages/Home";
import NewResource from "./Pages/NewResource";
import ToDoList from "./Pages/ToDoList";
import { useState } from "react";
import { IUser } from "./interfaces";

function App(): JSX.Element {
  const [user, setUser] = useState<IUser>({
    user_id: 1,
    user_name: "katrina",
    faculty_status: false
  });

  return (
    <div>
      <HomePage />
      <NewResource usernameid={user.user_id} />
      <ToDoList />
    </div>
  );
}

export default App;
