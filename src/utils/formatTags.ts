export function formatTags(tags: string[]): string[]  {
  if (tags.length > 1) {
    const returnTagsBeg = tags[0].replace('{"', "");
    const returnTagsEnd = returnTagsBeg.replace('"}', "");
    const returnTags = returnTagsEnd.split('","');
    return returnTags;
  } else {
    return ["No Tags"];
  }
}
