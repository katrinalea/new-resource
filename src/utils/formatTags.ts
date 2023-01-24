export function formatTags(tags: string[]): string[] {
  const returnTagsBeg = tags[0].replace('{"', "");
  const returnTagsEnd = returnTagsBeg.replace('"}', "");
  const returnTags = returnTagsEnd.split('","');
  return returnTags;
}
