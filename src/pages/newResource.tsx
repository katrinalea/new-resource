import { ISubmitResource } from "../interfaces";
import { useState } from "react";

export default function NewResource(): JSX.Element {
  const [resourceSubmit, setResourceSubmit] = useState<ISubmitResource>({
    url: "",
    author: "",
    title: "",
    description: "",
    tags: [],
    week: 0,
    type: "",
    usedreview: "",
    reason: "",
  });

  function handleSubmitResource() {
    console.log("submitting");

    // post request to db
  }

  return (
    <div>
      <p>Create a new resource</p>
      <p> {resourceSubmit.title}</p>
      <form>
        <p>Resource Title:</p>
        <input type="text" placeholder="" value = {resourceSubmit.title} onChange = {(e) => setResourceSubmit({...resourceSubmit, title: e.target.value})}/>
        <p>Author Name:</p>
        <input type="text" placeholder="" />
        <p>Resource URL:</p>
        <input type="text" placeholder="" />
        <p>Resource description</p>
        <input type="text" placeholder="" />
        <p> Week to complete</p>
        <button> Choose week </button>
        <p>Resource tags:</p>
        <button>Choose relevent tags</button>
        <p>Have you used this?</p>
        <button>Choose option</button>
        <p>Reason for use</p>
        <input type="text" placeholder="" />
      </form>

      <button onClick={() => handleSubmitResource}> Submit resource</button>
    </div>
  );
}
