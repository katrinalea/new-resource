import { IResource } from "../interfaces";
import { url } from "../App";
import { useState, useEffect } from "react";
import axios from "axios";

interface IResourcePreview {
  resource: IResource;
  userID: number | null;
}

export default function ResourcePreview(props: IResourcePreview): JSX.Element {
  const [isLiked, setIsLiked] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchLikes = async () => {
      const completeURL =
        url + `/${props.resource.resource_id}/likes/${props.userID}`;
      const { data } = await axios.get(completeURL);
      setIsLiked(data);
    };
    fetchLikes();
  }, [props.resource.resource_id, props.userID, setIsLiked]);

  const handleLike = async (resourceid: number, userid: number) => {
    const likeURL = url + `/resources/${resourceid}/likes`;
    const updatedLikeStatus = isLiked ? null : true;
    console.log("handle like entered");
  };

  const handleDisike = async (resourceid: number, userid: number) => {
    const likeURL = url + `/resources/${resourceid}/likes`;
  };

  return (
    <div>
      <h3> {props.resource.resource_name} </h3>
      <button> Show more ! </button>
      {props.userID && (
        <div>
          <button
            onClick={() =>
              handleLike(props.resource.resource_id, props.resource.user_id)
            }
          >
            {" "}
            👍{" "}
          </button>
          <button
            onClick={() =>
              handleDisike(props.resource.resource_id, props.resource.user_id)
            }
          >
            {" "}
            👎{" "}
          </button>
        </div>
      )}
    </div>
  );
}
