import { useState } from "react";

interface INewCommentProps {
    userID: number;
    resourceID: number;
  }

export default function NewComment(props: INewCommentProps): JSX.Element {

const [commentText, setCommentText] = useState<string>("");

async function handleSubmit(){
    console.log("hi");
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
    