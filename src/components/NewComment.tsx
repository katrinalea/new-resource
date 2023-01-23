import axios from "axios";
import { useState } from "react";
import { url } from "../App";

interface INewCommentProps {
    userID: number;
    resourceID: number;
  }

export default function NewComment(props: INewCommentProps): JSX.Element {

const userID = props.userID
const resourceID = props.resourceID

const [commentText, setCommentText] = useState<string>("");

async function handleSubmit(){
    if (!commentText ){
        window.alert("No comment text!")
    } else {
        await axios.post(`${url}/comments/${resourceID}/`,
        { 
            user_id: userID, 
            resource_id: resourceID, 
            comment: commentText 
        }) //user.id, resource.id and comment text
    }
    console.log("posted: ", commentText);
}

    return(
    <div>
        <input type="text" placeholder="Write a comment!"
          value={commentText}
          onChange={(e) =>
            setCommentText( e.target.value )
          }>
        </input>
        <button onClick={handleSubmit}>Submit comment</button>
    </div>
    );
}
    