import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { IUser } from "../interfaces";
import { IResource } from "../interfaces";
import { filterResources } from "../utils/searchFilter";
import { Resource } from "./Resource";
interface IHomePageProps {
  userID: number | null;
  setUserID: React.Dispatch<React.SetStateAction<number | null>>;
  resources: IResource[];
  users: IUser[];
}

export default function HomePage({
  setUserID,
  resources,
  users,
}: IHomePageProps): JSX.Element {

const [searchText, setSearchText] = useState<string>('');

const filteredResources = filterResources(searchText, resources); 

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
