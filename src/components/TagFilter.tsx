import { technologies } from "../Pages/NewResource";

interface TagFilterProps {
  handleFilterTag: (tech: string) => void;
  selectedTags: string[];
}

export default function TagFilter({
  handleFilterTag, selectedTags
}: TagFilterProps): JSX.Element {
  return (
    <div>
      {technologies.map((technology) => (
        <button
          className={selectedTags.includes(technology) ? "button-8-clicked" : "button-8"}
          key={technology}
          onClick={() => handleFilterTag(technology)}
        >
          {technology}
        </button>
      ))}
    </div>
  );
}
