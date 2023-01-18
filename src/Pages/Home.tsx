import axios from "axios";
import { resourceUsage } from "process";
import { useEffect, useState } from "react";
import { url } from "../App";
import { IUser } from "../interfaces";
import { IResource } from "../interfaces";
interface IHomePageProps {
  userID: number | null;
  setUserID: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function HomePage({
  userID,
  setUserID,
}: IHomePageProps): JSX.Element {
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
      <div></div>
    </div>
  );
}
