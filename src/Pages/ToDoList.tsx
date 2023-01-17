import { useParams } from "react-router-dom";

export default function ToDoList(): JSX.Element {
  const { userID } = useParams();

  return (
    <div>
      <p>{userID}</p>
    </div>
  );
}
