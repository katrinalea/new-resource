import { technologies } from "../Pages/NewResource";

interface TagFilterProps {
  handleFilterTag: (tech: string) => void;
  selectedTags: string[];
  switchFromOrToAnd: boolean;
  handleSwitchFromOrToAnd: (set: boolean) => void;
}

export default function TagFilter({
  handleFilterTag,
  selectedTags,
  switchFromOrToAnd,
  handleSwitchFromOrToAnd,
}: TagFilterProps): JSX.Element {
  return (
    <div>
      {technologies.map((technology) => (
        <button
          className={
            selectedTags.includes(technology) ? "button-8-clicked" : "button-8"
          }
          key={technology}
          onClick={() => handleFilterTag(technology)}
        >
          {technology}
        </button>
      ))}
      <button
        className={switchFromOrToAnd ? "button-8-clicked" : "button-8"}
        onClick={() => handleSwitchFromOrToAnd(switchFromOrToAnd)}
      >
        {switchFromOrToAnd ? "SEARCH TYPE:AND" : "SEARCH TYPE:OR"}
      </button>
    </div>
  );
}
