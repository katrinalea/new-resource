import formatSubmissionDate from "./formatSubmissionDate";

test("function removes unnecessary time from end of date", () => {
  expect(formatSubmissionDate("2023-01-17T00:00:00.000Z")).toEqual(
    "2023-01-17"
  );
});
