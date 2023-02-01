import { IResource } from "../interfaces";
import { formatTags } from "./formatTags";

export function filterResources(
  searchedText: string,
  tags: string[],
  resources: IResource[],
  typeSwitch: boolean
) {
  if (!searchedText && tags.length === 0) {
    return resources;
  }

  const filteredList =
    tags.length === 0
      ? resources.filter((resource) => {
          const allTags: string = resource.tags.join("#").toLowerCase();
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
            allTags.includes(searchedText.toLowerCase())
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
            searchedTags.includes(searchedText.toLowerCase())
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
  if (typeSwitch) {
    return checkedTags.length !== selectedTags.length;
  }
  return checkedTags.length === 0;
}
