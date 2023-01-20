import HomePage from "./Pages/Home";
import NewResource from "./Pages/NewResource";
import ToDoList from "./Pages/ToDoList";
import { useState, useEffect } from "react";
import { IUser } from "./interfaces";
import { Routes, Route, NavLink } from "react-router-dom";
import { IResource } from "./interfaces";
import axios from "axios";

export const url =
  process.env.NODE_ENV === "production"
    ? "https://coding-resources-backend.onrender.com"
    : "http://localhost:4000";

function App(): JSX.Element {
  const [userID, setUserID] = useState<number | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [allResources, setAllResources] = useState<IResource[]>([]);

  useEffect(() => {
    const userNamesCompleteURL = url + "/users";
    const resourcesURL = url + "/resources";

    const fetchAllResources = async () => {
      const { data } = await axios.get(resourcesURL);
      setAllResources(data);
    };
    const fetchUserNames = async () => {
      const { data } = await axios.get(userNamesCompleteURL);
      setUsers(data);
    };
    fetchUserNames();
    fetchAllResources();
  }, []);

  return (
    <div>
      <div className="navbar">
        <NavLink to="/">Homepage</NavLink>

      
        {userID && <NavLink to="/add-resource">Add Resource</NavLink>}

        {userID && <NavLink to={`/to-do-list/${userID}`}>To-Do List</NavLink>}
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              resources={allResources}
              users={users}
              userID={userID}
              setUserID={setUserID}
            />
          }
        />
        <Route path="/add-resource" element={<NewResource userID={userID} />} />
        <Route
          path="/to-do-list/:userID"
          element={<ToDoList resources={allResources} users={users} />}
        />
      </Routes>
    </div>
  );
}

export default App;
