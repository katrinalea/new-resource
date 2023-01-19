import axios from "axios";
import { resourceUsage } from "process";
import { useEffect, useState } from "react";
import { url } from "../App";
import SearchBar from "../components/SearchBar";
import { IUser } from "../interfaces";
import { IResource } from "../interfaces";
import { filterResources } from "../utils/searchFilter";
import { Resource } from "./Resource";
interface IHomePageProps {
  userID: number | null;
  setUserID: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function HomePage({
  userID,
  setUserID,
}: IHomePageProps): JSX.Element {
  const [users, setUsers] = useState<IUser[]>([]);
  //perhaps constantly have a hard version of original list to reset to
  //how to prok re-renders???
  const [allResources, setAllResources] = useState<IResource[]>([]);
  const [searchText, setSearchText] = useState<string>('');

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

  const filteredResources = filterResources(searchText, allResources);

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
      <div>
        <SearchBar searchText={searchText} setSearchText={setSearchText}/>
      </div>
      <div>
        {filteredResources.map(resource =>
          <Resource key = {resource.resource_id} oneResource={resource} users = {users}/>)}
      </div>
    </div>
  );
}
