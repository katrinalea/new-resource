import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../App";
import { IResource, IToDo, IUser } from "../interfaces";
import { Resource } from "./Resource";


interface ToDoListResources{
  resources: IResource[];
  users: IUser[]
}
export default function ToDoList({resources, users}:ToDoListResources): JSX.Element {
  const { userID } = useParams();
  const [toDos, setToDos] = useState<IToDo[]>([]);

  const resourcesInfo = resources.filter((resource) => toDos.map(x => x.resource_id).includes(resource.resource_id))

  useEffect(() => {
    const endpoint = url + `to-do-list/${userID}/`;

    const fetchTodoListItems = async () => {
      const { data } = await axios.get(endpoint);
      setToDos(data);
    };
    fetchTodoListItems();
  }, []);
  return (
    <div>
      <p>{userID}</p>
      {/* need to get the id of the resource from the resources fetched in home ?? */}
      {resourcesInfo.map(oneToDo => 
  <Resource oneResource={oneToDo} users = {users} key={oneToDo.resource_id}/>


      )}
      {/* map over the todolist to chave the resource component but need to add the bin inside the div */}
    </div>
  );
}
