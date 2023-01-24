import { useParams } from "react-router-dom";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { url } from "../App";
import { IToDoResource } from "../interfaces";
import ResourcePreview from "../components/ResourcePreview";

export default function ToDoList(): JSX.Element {
  const { userID } = useParams();
  const [toDoResources, setToDoResources] = useState<IToDoResource[]>([]);

  const endpoint = url + `/to-do-list/${userID}/`;
  const fetchTodoListItems = useCallback(async () => {
    const { data } = await axios.get(endpoint);
    setToDoResources(data);
  }, [endpoint]);

  useEffect(() => {
    fetchTodoListItems();
  }, [fetchTodoListItems, userID]);

  const handleDeleteToDoItem = async (todoid: number) => {
    console.log("entered delete");
    await axios.delete(url + `/to-do-list/${todoid}`);
    console.log("deleted");
    await fetchTodoListItems();
    console.log("refreshed");
  };

  return (
    <div>
      {/* need to get the id of the resource from the resources fetched in home ?? */}
      {toDoResources.length > 0 ? (
        toDoResources.map((oneToDo) => (
          <>
            <ResourcePreview
              key={oneToDo.resource_id}
              resource={oneToDo}
              userID={Number(userID)}
            />
            <button onClick={() => handleDeleteToDoItem(oneToDo.to_do_item_id)}>
              🗑️{" "}
            </button>
          </>
        ))
      ) : (
        <p>your to-do list is empty!</p>
      )}

      {/* map over the todolist to chave the resource component but need to add the bin inside the div */}
    </div>
  );
}
