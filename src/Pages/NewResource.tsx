import { IResource, ISubmitResource } from "../interfaces";
import { useState } from "react";
import axios from "axios";
import { url } from "../App";

interface IProps {
  usernameid: number;
}

export default function NewResource(props: IProps): JSX.Element {
  const [tagsArray, setTagsArray] = useState<string[]>([]);


  const [resourceSubmit, setResourceSubmit] = useState<ISubmitResource>({
    resource_url: "",
    author_name: "",
    resource_name: "",
    resource_description: "",
    tags: tagsArray,
    selene_week: 0,
    content_type: "",
    usage_status: "",
    recommendation_reason: "",
    user_id: props.usernameid,
  });

  function handleAddToTagsArray(tag: string) {
    if (!tagsArray.includes(tag)) {
      setTagsArray([...tagsArray, tag]);
    } else {
      setTagsArray(tagsArray.filter((item) => item !== tag));
    }
  }

  async function handleSubmitResource(resource: ISubmitResource) {
    await axios.post(`${url}/resources`, resource)
  }


  const technologies = ["React", "Typescript", "Javascript", "Front-end", "Back-end", "CSS", "HTML", "SQL"]
  return (
    <div>
      <p>Create a new resource</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>Resource Title:</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.resource_name}
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, resource_name: e.target.value })
          }
        />
        <p>Author Name:</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.author_name}
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, author_name: e.target.value })
          }
        />
        <p>Resource URL:</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.resource_url}
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, resource_url: e.target.value })
          }
        />
        <p>Resource description:</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.resource_description}
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              resource_description: e.target.value,
            })
          }
        />
        <p> Week to complete:</p>
        <select
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              selene_week: parseInt(e.target.value),
            })
          }
        >
          <option value={1}>Week 1</option>
          <option value={2}>Week 2</option>
          <option value={3}>Week 3</option>
          <option value={4}>Week 4</option>
          <option value={5}>Week 5</option>
          <option value={6}>Week 6</option>
        </select>
        <p> Type of resource: </p>
        <select
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, content_type: e.target.value })
          }
        >
          <option value="read">Read only</option>
          <option value="interactive"> Interactive</option>
          <option value="tutorial">Tutorial</option>
        </select>

        <p>Resource tags: Select all that are relevant</p>
        {technologies.map(tech =>
          <button key = {tech} onClick={() => handleAddToTagsArray(tech)}>
         {tech}</button>)}
        <p>Have you used this?</p>
        <select
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, usage_status: e.target.value })
          }
        >
          <option value="used">Used this resource and loved it!</option>
          <option value="used2">
            Used this resource, some parts are useful
          </option>
          <option value="notUsed">
            Haven't used this but it looks promising
          </option>
        </select>
        <p>Reason for use</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.recommendation_reason}
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, recommendation_reason: e.target.value })
          }
        />
      </form>

      <button onClick={() => handleSubmitResource}> Submit resource</button>
    </div>
  );
}
