export default function formatSubmissionDate(date: string): string {
  const formattedDate = date.replace("T00:00:00.000Z", "");
  return formattedDate;
}
