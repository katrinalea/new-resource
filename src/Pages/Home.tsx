import { useState } from "react";
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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleFilterTag = (clickedTag: string) => {
    const currentTags = selectedTags;

    if (!currentTags.includes(clickedTag)) {
      currentTags.push(clickedTag);
    } else {
      delete currentTags[
        currentTags.findIndex((tag) => {
          return tag === clickedTag;
        })
      ];
    }
    setSelectedTags(
      currentTags.filter((tag) => {
        return tag;
      })
    );
  };

  const [switchFromOrToAnd, setSwitchFromOrToAnd] = useState<boolean>(false);
  function handleSwitchFromOrToAnd(switchFromOrToAnd: boolean): void {
    setSwitchFromOrToAnd(!switchFromOrToAnd);
  }

  const filteredResources: IResource[] = filterResources(
    searchText,
    selectedTags,
    resources,
    switchFromOrToAnd
  );
  // console.table(filteredResources)
  // console.table(selectedTags)

  return (
    <div className="homepage-container">
      <h1>Home</h1>
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
        <TagFilter
          handleFilterTag={handleFilterTag}
          selectedTags={selectedTags}
          switchFromOrToAnd={switchFromOrToAnd}
          handleSwitchFromOrToAnd={handleSwitchFromOrToAnd}
        />
      </div>
      <div className="resourcePrev-container">
        {filteredResources.map((resource) => (
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
