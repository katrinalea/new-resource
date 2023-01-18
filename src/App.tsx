import HomePage from "./Pages/Home";
import NewResource from "./Pages/NewResource";
import ToDoList from "./Pages/ToDoList";
import { useState } from "react";
import { IUser } from "./interfaces";
import { Routes, Route, NavLink } from "react-router-dom";

export const url =
  process.env.NODE_ENV === "production"
    ? "https://coding-resources-backend.onrender.com"
    : "http://localhost:4000";

function App(): JSX.Element {
  const [userID, setUserID] = useState<number | null>(null);

  return (
    <div>
      <div className="navbar">
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/add-resource">Add Resource</NavLink>
        {userID && <NavLink to={`/${userID}/to-do-list`}>To-Do List</NavLink>}
      </div>
      <Routes>
        <Route
          path="/"
          element={<HomePage userID={userID} setUserID={setUserID} />}
        />
        <Route path="/add-resource" element={<NewResource userID={userID} />} />
        <Route path="/:userID/to-do-list" element={<ToDoList resources = {} users = {}/>} />
      </Routes>
    </div>
  );
}

export default App;
