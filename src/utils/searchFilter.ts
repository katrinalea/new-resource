import { IResource } from "../interfaces";

export function filterResources(searchedText:string, resources:IResource[]){ //refactor as seperate utility function in /utils
    if (!searchedText){
      return resources;
    }
    
    const filteredList = resources.filter((resource) => 
    {
      
      const allTags:string = resource.tags.join("#").toLowerCase(); //['react', 'javascript'] => #react#javascript so we can't searchactja
      return(
      resource.author_name.toLowerCase().includes(searchedText.toLowerCase()) ||
      resource.resource_description.toLowerCase().includes(searchedText.toLowerCase()) ||
      resource.resource_name.toLowerCase().includes(searchedText.toLowerCase()) ||
      allTags.includes(searchedText.toLowerCase()) // or could do ||resource.tags.includes(searchText.toLowerCase()) 
    )})
    return filteredList;
  }