import axios from "axios";
import { resourceUsage } from "process";
import { useEffect, useState } from "react";
import { url } from "../App";
import ResourcePreview from "../components/resourcePreview";
import { IUser } from "../interfaces";
import { IResource } from "../interfaces";
import { Resource } from "./Resource";
interface IHomePageProps {
  userID: number | null;
  setUserID: React.Dispatch<React.SetStateAction<number | null>>;
  resources: IResource[];
  users: IUser[];
}

export default function HomePage({
  userID,
  setUserID,
  resources,
  users,
}: IHomePageProps): JSX.Element {
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
        {resources.map((resource) => (
          <ResourcePreview
            key={resource.resource_id}
            resource={resource}
            userID={userID}
          />
        ))}
      </div>
    </div>
  );
}
