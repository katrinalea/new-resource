import { useParams } from "react-router-dom";
import { IResource, IUser, IComment } from "../interfaces";
import { formatTags } from "../utils/formatTags";
import NewComment from "../components/NewComment";
import { useEffect, useState } from "react";
import { url } from "../App";
import axios from "axios";

interface ResourceProps {
  users: IUser[];
  allResources: IResource[];
  userID: number | null;
}

export function Resource({
  allResources,
  users,
  userID,
}: ResourceProps): JSX.Element {
  const [comments, setComments] = useState<IComment[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { resourceID } = useParams();

  console.log("Resource.tsx re-rendered!");
  useEffect(() => {
    console.log("useEffect called");

    const fetchComments = async () => {
      const completeURL = url + `/resources/${resourceID}/comments`;
      console.log(completeURL);

      const response = await fetch(completeURL);
      const responseJSON = await response.json();
      console.log(responseJSON);

      if (responseJSON.length > 0) {
        setComments(responseJSON);
      }
    };
    fetchComments();
  }, [resourceID, setSubmitted, submitted]);

  const oneResourceArray = allResources.filter(
    (resource) => resource.resource_id === Number(resourceID)
  );
  const oneResource = oneResourceArray[0];
  const filteredUser = users.filter(
    (user) => user.user_id === oneResource.user_id
  );

  const handleAddToDoList = async(userID: number, resourceID: number)=>{
    try{
      await axios.post(url + "/to-do-list", {resource_id: resourceID, user_id: userID})
      window.alert("Added the post to your to do list")
    }
    catch(error){
      console.error(error)
    }
  }
  return (
    <>
      <h1>{oneResource.resource_name}</h1>
      <h2>{oneResource.author_name}</h2>
      <p>{oneResource.resource_description}</p>
      <p>{oneResource.recommendation_reason}</p>
      <a href={oneResource.resource_url}>{oneResource.resource_url}</a>
      <p>{filteredUser[0].user_name}</p>
      <small>{oneResource.time_of_post}</small>
      <p>{oneResource.selene_week}</p>
      <p>{oneResource.content_type}</p>
      <p>{oneResource.usage_status}</p>
      {formatTags(oneResource.tags).map((tag) => (
        <p key={tag}> {tag}</p>
      ))}
      {userID && <button onClick = {()=>handleAddToDoList(userID, Number(resourceID))}>Add to To Do List</button>}
      {userID && resourceID && (
        <NewComment
          userID={userID}
          resourceID={parseInt(resourceID)}
          submitted={setSubmitted}
        />
      )}
      {comments.map((comment) => (
        <>
          <p>Comment posted by: User-{comment.user_id}</p>
          <p key={comment.commment_id}>{comment.comment}</p>
        </>
      ))}
    </>
  );
}
