import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../App";
import { IUser } from "../interfaces";

export default function HomePage(): JSX.Element {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  useEffect(() => {
    const endpoint = url + "/users";

    const fetchUserNames = async () => {
      const { data } = await axios.get(endpoint);
      setUsers(data);
    };
    fetchUserNames();
  }, []);

  return (
    <div>
      <p>Home</p>
      <select onChange={(e) => setLoggedInUser(e.target.value)}>
        {users.map((user) => (
          <option key={user.user_name} value={user.user_name}>
            {user.user_name}
          </option>
        ))}
      </select>
    </div>
  );
}
