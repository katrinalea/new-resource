interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}
//--------------------------------------------------------------------------------
export default function SearchBar(props: SearchBarProps): JSX.Element {
  const searchText = props.searchText;
  const setSearchText = props.setSearchText;

  return (
    <input
      placeholder="Search for a resource."
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
    />
  );
}
