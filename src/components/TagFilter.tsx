import { technologies } from "../Pages/NewResource";

interface TagFilterProps {
  handleFilterTag: (tech: string) => void;
}

export default function TagFilter({
  handleFilterTag,
}: TagFilterProps): JSX.Element {
  return (
    <div>
      {technologies.map((technology) => (
        <button key={technology} onClick={() => handleFilterTag(technology)}>
          {technology}
        </button>
      ))}
    </div>
  );
}
