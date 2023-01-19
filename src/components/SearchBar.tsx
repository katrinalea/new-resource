import { useState } from "react";

export default function SearchBar(): JSX.Element {

const [searchText, setSearchText] = useState<string>('')

  return (
    <input placeholder="Search for a resource." 
    value={searchText} 
    onChange={(e)=>{setSearchText(e.target.value)}} />
  );
}
