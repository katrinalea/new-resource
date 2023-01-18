import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../App";
import { IUser } from "../interfaces";

interface IHomePageProps {
  userID: number | null;
  setUserID: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function HomePage({
  userID,
  setUserID,
}: IHomePageProps): JSX.Element {
  const [users, setUsers] = useState<IUser[]>([]);

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
      <select onChange={(e) => setUserID(Number(e.target.value))}>
        <option selected={true} disabled>
          select a profile
        </option>
        {users.map((user) => (
          <option key={user.user_id} value={Number(user.user_id)}>
            {user.user_name}
          </option>
        ))}
      </select>
    </div>
  );
}
