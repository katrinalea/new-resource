import { ISubmitResource } from "../interfaces";
import { useState } from "react";
import axios from "axios";
import { url } from "../App";

interface INewResourceProps {
  userID: number | null;
  checkResources: () => void;
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
  const emptySubmission = {
    resource_url: "https://",
    author_name: "",
    resource_name: "",
    resource_description: "",
    tags: [],
    selene_week: "",
    content_type: "",
    usage_status: "",
    recommendation_reason: "",
    user_id: props.userID,
  };

  const [resourceSubmit, setResourceSubmit] =
    useState<ISubmitResource>(emptySubmission);

  const [attemptedSubmit, setAttemptedSubmit] = useState<boolean>(false);

  const tagsArray: string[] = resourceSubmit.tags.filter((tag) => {
    return tag;
  });

  async function handleSubmitResource(resource: ISubmitResource) {
    if (!props.userID) {
      window.alert("return to homepage and sign in");
    } else if (
      !resourceSubmit.resource_url ||
      !resourceSubmit.resource_name ||
      !resourceSubmit.resource_description
    ) {
      window.alert("missing fields");
    } else {
      await axios.post(`${url}/resources`, resource);
      setResourceSubmit(emptySubmission);
      setAttemptedSubmit(false);
      props.checkResources();
      window.alert("resource submitted");
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

  return (
    <div>
      <h1>Create a new resource</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p
          className={
            resourceSubmit.resource_name === "" && attemptedSubmit
              ? "resource-title-missing"
              : "resource-title"
          }
        >
          Resource Title:
        </p>
        <input
          className="title"
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
        <p
          className={
            resourceSubmit.resource_name === "" && attemptedSubmit
              ? "url-missing"
              : "url"
          }
        >
          Resource URL:
        </p>
        <input
          className="input-url"
          type="url"
          placeholder=""
          value={resourceSubmit.resource_url}
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              resource_url: e.target.value,
            })
          }
        />
        <p
          className={
            resourceSubmit.resource_name === "" && attemptedSubmit
              ? "description-missing"
              : "description"
          }
        >
          Resource description:
        </p>
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
          className="dropdown"
          defaultValue={""}
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              selene_week: e.target.value,
            })
          }
        >
          <option value={""} disabled hidden>
            select an option
          </option>
          {seleneWeeks.map((week, i) => (
            <option value={week} key={i}>
              {week}
            </option>
          ))}
        </select>
        <p> Type of resource: </p>
        <select
          className="dropdown"
          defaultValue={""}
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              content_type: e.target.value,
            })
          }
        >
          <option value={""} disabled hidden>
            select an option
          </option>
          <option value="read">Read only</option>
          <option value="interactive"> Interactive</option>
          <option value="tutorial">Tutorial</option>
        </select>

        <p>Resource tags: Select all that are relevant</p>
        {technologies.map((tech) => (
          <button
            className={
              tagsArray.includes(tech) ? "button-8-clicked" : "button-8"
            }
            key={tech}
            onClick={() => handleAddToTagsArray(tech)}
          >
            {tech}
          </button>
        ))}
        <p>Have you used this?</p>
        <select
          className="dropdown"
          defaultValue={""}
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              usage_status: e.target.value,
            })
          }
        >
          <option value={""} disabled hidden>
            select an option
          </option>
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
      <br />
      <button
        className="button-30"
        onClick={() => {
          handleSubmitResource(resourceSubmit);
          setAttemptedSubmit(true);
        }}
      >
        {" "}
        Submit resource
      </button>
    </div>
  );
}
