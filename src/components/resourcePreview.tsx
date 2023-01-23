import { IResource } from "../interfaces";
import { url } from "../App";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

interface IResourcePreview {
  resource: IResource;
  userID: number | null;
}

export default function ResourcePreview(props: IResourcePreview): JSX.Element {
  const [isLiked, setIsLiked] = useState<boolean | null>(null);
  console.log("resourcePreview rerendered");
  useEffect(() => {
    debugger;
    console.log("useEffect called");
    const fetchLikes = async () => {
      const completeURL =
        url + `/resources/${props.resource.resource_id}/likes/${props.userID}`;
      console.log(completeURL);
      const response = await fetch(completeURL);
      const responseJSON = await response.json();
      console.log(responseJSON);

      if (responseJSON.length > 0) {
        setIsLiked(responseJSON[0].is_liked);
      }
    };
    if (props.userID !== null) {
      fetchLikes();
    }
  }, [props.resource.resource_id, props.userID, setIsLiked]);

  const handleLike = async (resourceid: number, userid: number) => {
    const likeURL = url + `/resources/${resourceid}/likes`;
    const updatedLikeStatus = isLiked ? null : true;
    console.log("handle like entered");

    console.log(updatedLikeStatus);
    await axios.post(likeURL, { like: updatedLikeStatus, userId: userid });
    setIsLiked(updatedLikeStatus);
  };

  const handleDisike = async (resourceid: number, userid: number) => {
    const likeURL = url + `/resources/${resourceid}/likes`;
    const updatedDisLikeStatus = isLiked === false ? null : false;
    console.log("handle dislike entered");
    console.log(updatedDisLikeStatus);
    await axios.post(likeURL, { like: updatedDisLikeStatus, userId: userid });

    setIsLiked(updatedDisLikeStatus);
  };

  return (
    <div>
      <h3> {props.resource.resource_name} </h3>
      <Link to={`/resource/${props.resource.resource_id}`}>
        <button> Show more ! </button>
      </Link>
      {props.userID && (
        <div>
          {isLiked === null ? (
            <div>
              <AiOutlineLike
                onClick={() =>
                  handleLike(props.resource.resource_id, props.resource.user_id)
                }
              />
              <AiOutlineDislike
                onClick={() =>
                  handleDisike(
                    props.resource.resource_id,
                    props.resource.user_id
                  )
                }
              />
            </div>
          ) : isLiked === false ? (
            <>
              <AiOutlineLike
                onClick={() =>
                  handleLike(props.resource.resource_id, props.resource.user_id)
                }
              />
              <AiFillDislike
                onClick={() =>
                  handleDisike(
                    props.resource.resource_id,
                    props.resource.user_id
                  )
                }
              />
            </>
          ) : (
            <>
              <AiFillLike
                onClick={() =>
                  handleLike(props.resource.resource_id, props.resource.user_id)
                }
              />
              <AiOutlineDislike
                onClick={() =>
                  handleDisike(
                    props.resource.resource_id,
                    props.resource.user_id
                  )
                }
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
