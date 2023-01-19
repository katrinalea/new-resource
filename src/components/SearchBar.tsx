import { useState } from "react";
import { IResource } from "../interfaces";

interface SearchBarProps{
  // resources: IResource[];
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}
//--------------------------------------------------------------------------------
export default function SearchBar(props:SearchBarProps): JSX.Element {

// const resources = props.resources; 
//const [searchText, setSearchText] = useState<string>('') //move to Home.tsx

const searchText=props.searchText;
const setSearchText=props.setSearchText;

  return (
    <input placeholder="Search for a resource." 
    value={searchText} 
    onChange={(e)=>{setSearchText(e.target.value)}} />
  );
}


// function findMatchingEps(message: string, filteredArr: IEpisode[]) {
//   if (!message) {
//     return filteredArr;
//   }
//   return filteredArr.filter(
//     (episode) =>
//       episode.name.toLowerCase().includes(message.toLowerCase()) ||
//       episode.summary.toLowerCase().includes(message.toLowerCase())
//   );
// }