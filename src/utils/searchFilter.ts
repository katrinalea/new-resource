import { type } from "os";
import { IResource } from "../interfaces";
import { formatTags } from "./formatTags";

// type HashMap<T> = {[key: string]:T}

export function filterResources(
  searchedText: string,
  tags: string[],
  resources: IResource[],
  typeSwitch: boolean
) {
  // console.log("We should have " + tags.length + " selected");

  if (!searchedText && tags.length === 0) {
    return resources;
  }

  // const resourceHash:HashMap = {};

  // console.log("tags length is zero?", tags.length === 0);

  const filteredList =
    tags.length === 0
      ? resources.filter((resource) => {
          const allTags: string = resource.tags.join("#").toLowerCase(); //['react', 'javascript'] => #react#javascript so we can't searchactja
          return (
            resource.author_name
              .toLowerCase()
              .includes(searchedText.toLowerCase()) ||
            resource.resource_description
              .toLowerCase()
              .includes(searchedText.toLowerCase()) ||
            resource.resource_name
              .toLowerCase()
              .includes(searchedText.toLowerCase()) ||
            allTags.includes(searchedText.toLowerCase()) // or could do ||resource.tags.includes(searchText.toLowerCase())
          );
        })
      : resources.filter((resource) => {
          const checkedTags = checkTags(resource.tags, tags, typeSwitch);
          if (checkedTags) {
            return false;
          }
          const searchedTags: string = resource.tags.join("#").toLowerCase();
          return (
            resource.author_name
              .toLowerCase()
              .includes(searchedText.toLowerCase()) ||
            resource.resource_description
              .toLowerCase()
              .includes(searchedText.toLowerCase()) ||
            resource.resource_name
              .toLowerCase()
              .includes(searchedText.toLowerCase()) ||
            searchedTags.includes(searchedText.toLowerCase()) // or could do ||resource.tags.includes(searchText.toLowerCase())
          );
        });
  return filteredList;
}

function checkTags(
  currentTags: string[],
  selectedTags: string[],
  typeSwitch: boolean
) {
  const formattedTags = formatTags(currentTags);
  const tagList = selectedTags.join("#").toLowerCase();
  const checkedTags = formattedTags.filter((tag) => {
    return tagList.includes(tag.toLowerCase());
  });
  // console.log("checked ", checkedTags.length);
  // console.log("looking for  ", selectedTags.length);
  if (typeSwitch) {
    return checkedTags.length !== selectedTags.length;
  }
  return checkedTags.length === 0;
}
