export function formatTags(tags: string[]): string[] {
  const actualArray = tags[0];
  if (actualArray.length > 2) {
    const returnTagsBeg = actualArray.replace('{"', "");
    const returnTagsEnd = returnTagsBeg.replace('"}', "");
    const returnTags = returnTagsEnd.split('","');
    return returnTags;
  } else {
    return ["No Tags"];
  }
}
