import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../App";
import { IToDo } from "../interfaces";

export default function ToDoList(): JSX.Element {
  const { userID } = useParams();
  const [toDos, setToDos] = useState<IToDo[]>([]);
  useEffect(() => {
    const endpoint = url + "/to-do-list";

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
      {/* {toDos.map(oneToDo => 



      )} */}
      {/* map over the todolist to chave the resource component but need to add the bin inside the div */}
    </div>
  );
}
