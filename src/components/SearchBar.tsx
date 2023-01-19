import { useState } from "react";
import { IResource } from "../interfaces";

interface SearchBarProps{
  resources: IResource[];
}

export default function SearchBar(props:SearchBarProps): JSX.Element {


const resources = props.resources; 
const [searchText, setSearchText] = useState<string>('')

const filterResources = (searchedText:string, resources:IResource[]) => {
  if (!searchText){
    return resources;
  }
  
  

  const filteredList = resources.filter((resource) => 
  {
    
    const allTags:string = resource.tags.join("#") //['react', 'javascript'] => #react#javascript so I can't searchactja

    resource.author_name.toLowerCase().includes(searchText.toLowerCase()) ||
    resource.resource_description.toLowerCase().includes(searchText.toLowerCase()) ||
    resource.resource_name.toLowerCase().includes(searchText.toLowerCase()) ||
    allTags.includes(searchText.toLowerCase())});
  return [];
}

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