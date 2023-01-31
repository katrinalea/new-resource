import { useParams } from "react-router-dom";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { url } from "../App";
import { IToDoResource } from "../interfaces";
import ResourcePreview from "../components/ResourcePreview";

interface IToDoListProps {
  userID: number | null;
}
export default function ToDoList(props: IToDoListProps): JSX.Element {
  const currentUserID = props.userID;
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
    if (parseInt(userID ? userID : "-1") !== currentUserID) {
      window.alert("return to homepage and sign in");
    } else {
      await axios.delete(url + `/to-do-list/${todoid}`);
      await fetchTodoListItems();
    }
  };

  return (
    <div className="toDoPage">
      <h1>To Do List</h1>

      {/* need to get the id of the resource from the resources fetched in home ?? */}
      {parseInt(userID ? userID : "-1") !== currentUserID ? (
        <p>Please login!</p>
      ) : toDoResources.length > 0 ? (
        toDoResources.map((oneToDo) => (
          <div key={oneToDo.resource_id}>
            <ResourcePreview resource={oneToDo} userID={Number(userID)} />
            <button
              className="button-30"
              onClick={() => handleDeleteToDoItem(oneToDo.to_do_item_id)}
            >
              🗑️{" "}
            </button>
          </div>
        ))
      ) : (
        <p>your to-do list is empty!</p>
      )}

      {/* map over the todolist to chave the resource component but need to add the bin inside the div */}
    </div>
  );
}
