import { ISubmitResource } from "../interfaces";
import { useState } from "react";
import axios from "axios";
import { url } from "../App";

interface INewResourceProps {
  userID: number | null;
}
export const technologies = [
  "React",
  "Typescript",
  "Javascript",
  "Front-end",
  "Back-end",
  "CSS",
  "HTML",
  "SQL",
];

export const seleneWeeks = [
  "1: Workflows",
  "2: TypeScript and Code Quality",
  "3: React, HTML and CSS",
  "4: React and Event Handlers",
  "5: React and useEffect",
  "7: Node.js and Express",
  "8: SQL and persistence",
];

export default function NewResource(props: INewResourceProps): JSX.Element {
  const [resourceSubmit, setResourceSubmit] = useState<ISubmitResource>({
    resource_url: "",
    author_name: "",
    resource_name: "",
    resource_description: "",
    tags: [],
    selene_week: "",
    content_type: "",
    usage_status: "",
    recommendation_reason: "",
    user_id: props.userID,
  });

  const [attemptedSubmit, setAttemptedSubmit] = useState<boolean>(false);

  const tagsArray: string[] = resourceSubmit.tags.filter((tag) => {
    return tag;
  });
  console.table(resourceSubmit.tags);
  console.table(tagsArray);

  async function handleSubmitResource(resource: ISubmitResource) {
    if (
      !resourceSubmit.resource_url ||
      !resourceSubmit.resource_name ||
      !resourceSubmit.resource_description
    ) {
      window.alert("missing fields");
    } else {
      await axios.post(`${url}/resources`, resource);
    }
  }

  function handleAddToTagsArray(tag: string) {
    if (!tagsArray.includes(tag)) {
      tagsArray.push(tag);
    } else {
      delete tagsArray[
        tagsArray.findIndex((ele) => {
          return ele === tag;
        })
      ];
    }
    setResourceSubmit({
      ...resourceSubmit,
      tags: tagsArray.filter((tag) => {
        return tag;
      }),
    });
  }

  async function handleSubmitResource(resource: ISubmitResource) {
    await axios.post(`${url}/resources`, resource);
  }

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
            setResourceSubmit({
              ...resourceSubmit,
              resource_name: e.target.value,
            })
          }
        />
        <p>Author Name:</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.author_name}
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              author_name: e.target.value,
            })
          }
        />
        <p>Resource URL:</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.resource_url}
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              resource_url: e.target.value,
            })
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
              selene_week: e.target.value,
            })
          }
        >
          {seleneWeeks.map((week, i) => (
            <option value={week} key={i}>
              {week}
            </option>
          ))}
        </select>
        <p> Type of resource: </p>
        <select
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              content_type: e.target.value,
            })
          }
        >
          <option value="read">Read only</option>
          <option value="interactive"> Interactive</option>
          <option value="tutorial">Tutorial</option>
        </select>

        <p>Resource tags: Select all that are relevant</p>
        {technologies.map((tech) => (
          <button key={tech} onClick={() => handleAddToTagsArray(tech)}>
            {tech}
          </button>
        ))}
        <p>Have you used this?</p>
        <select
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              usage_status: e.target.value,
            })
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
            setResourceSubmit({
              ...resourceSubmit,
              recommendation_reason: e.target.value,
            })
          }
        />
      </form>

      <button onClick={() => handleSubmitResource}> Submit resource</button>
    </div>
  );
}
