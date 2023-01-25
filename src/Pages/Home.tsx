import { useEffect, useState } from "react";
import ResourcePreview from "../components/ResourcePreview";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";
import { IUser } from "../interfaces";
import { IResource } from "../interfaces";
import { filterResources } from "../utils/searchFilter";

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
  userID,
}: IHomePageProps): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const filteredResources = filterResources(searchText, resources);
  const [finalFilteredResources, setFinalFilteredResources] =
    useState<IResource[]>(filteredResources);
  const [lastClickedTag, setLastClickedTag] = useState<string>("");

  const handleFilterTag = (clickedTag: string) => {
    if (clickedTag === lastClickedTag) {
      setFinalFilteredResources(filteredResources);
      setLastClickedTag("");
      return;
    }
    setLastClickedTag(clickedTag);
    const tagFilteredResources = filteredResources.filter((resource) => {
      const allResourceTags: string = resource.tags.join("#").toLowerCase();
      console.log("clicked", clickedTag);
      return allResourceTags.includes(clickedTag.toLowerCase());
    });
    setFinalFilteredResources(tagFilteredResources);
  };

  useEffect(() => {
    setFinalFilteredResources(filteredResources);
  }, [filteredResources]);

  return (
    <div className="homepage-container">
      <p>Home</p>
      <select
        className="dropdown"
        onChange={(e) => setUserID(Number(e.target.value))}
      >
        <option selected={!userID && true} disabled>
          select a profile
        </option>
        {users.map((user) => (
          <option key={user.user_id} value={Number(user.user_id)}>
            {user.user_name}
          </option>
        ))}
      </select>
      {userID && (
        <button className="button-30" onClick={() => setUserID(null)}>
          sign out
        </button>
      )}
      <div>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <TagFilter handleFilterTag={handleFilterTag} />
      </div>
      <div className="resourcePrev-container">
        {finalFilteredResources.map((resource) => (
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
