import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../App";
import { IResource, IToDo, IUser } from "../interfaces";
import ResourcePreview from "../components/ResourcePreview";

interface ToDoListResources {
  resources: IResource[];
  users: IUser[];
}
export default function ToDoList({
  resources,
  users,
}: ToDoListResources): JSX.Element {
  const { userID } = useParams();
  const [toDos, setToDos] = useState<IToDo[]>([]);

  const idsArray = toDos.map((x) => x.resource_id); // parse array of to do objects into array of resource ids
  const usersToDoList = resources.filter((resource) =>
    idsArray.includes(resource.resource_id)
  ); // filters array of resource objects to only those resources included in ids.array

  console.table(usersToDoList);
  console.log("rerendering");

  useEffect(() => {
    const endpoint = url + `/to-do-list/${userID}/`;

    const fetchTodoListItems = async () => {
      const { data } = await axios.get(endpoint);
      setToDos(data);
    };
    fetchTodoListItems();
  }, [userID]);
  return (
    <div>
      {/* need to get the id of the resource from the resources fetched in home ?? */}
      {usersToDoList.length > 0 ? (
        usersToDoList.map((oneToDo) => (
          <ResourcePreview
            key={oneToDo.resource_id}
            resource={oneToDo}
            userID={Number(userID)}
          />
        ))
      ) : (
        <p>your to-do list is empty!</p>
      )}

      {/* map over the todolist to chave the resource component but need to add the bin inside the div */}
    </div>
  );
}
