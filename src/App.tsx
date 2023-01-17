import HomePage from "./Pages/Home";
import NewResource from "./Pages/NewResource";
import ToDoList from "./Pages/ToDoList";
import { useState } from "react";
import { IUser } from "./interfaces";
export const url =
  process.env.NODE_ENV === "production"
    ? "https://coding-resources-backend.onrender.com"
    : "http://localhost:4000";

function App(): JSX.Element {
  const [user, setUser] = useState<IUser>({
    user_id: 1,
    user_name: "katrina",
    faculty_status: false,
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
