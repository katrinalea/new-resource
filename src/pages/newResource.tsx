import { ISubmitResource } from "../interfaces";
import { useState } from "react";

interface IProps {
  usernameid: number;
}

export default function NewResource(props: IProps): JSX.Element {
  const [tagsArray, setTagsArray] = useState<string[]>([]);

  const [resourceSubmit, setResourceSubmit] = useState<ISubmitResource>({
    url: "",
    author: "",
    title: "",
    description: "",
    tags: tagsArray,
    week: 0,
    type: "",
    usedreview: "",
    reason: "",
    userid: props.usernameid,
  });

  function handleSubmitResource() {
    console.log("submitting");

    // post request to db
  }

  function createTagsList(tag: string) {
    setTagsArray([...tagsArray, tag]);
    console.log(tagsArray);
  }

  return (
    <div>
      <p>Create a new resource</p>
      <form>
        <p>Resource Title:</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.title}
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, title: e.target.value })
          }
        />
        <p>Author Name:</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.author}
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, author: e.target.value })
          }
        />
        <p>Resource URL:</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.url}
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, url: e.target.value })
          }
        />
        <p>Resource description</p>
        <input
          type="text"
          placeholder=""
          value={resourceSubmit.description}
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              description: e.target.value,
            })
          }
        />
        <p> Week to complete</p>
        <select
          onChange={(e) =>
            setResourceSubmit({
              ...resourceSubmit,
              week: parseInt(e.target.value),
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
        <p> Type of resource </p>
        <select
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, type: e.target.value })
          }
        >
          <option value="read">Read only</option>
          <option value="interactive"> Interactive</option>
          <option value="tutorial">Tutorial</option>
        </select>

        <p>Resource tags: Select all that are relevant</p>
        <button onClick={() => createTagsList("javascript")}>
          {" "}
          Javascript{" "}
        </button>
        <button onClick={() => createTagsList("typescript")}>
          {" "}
          Typescript{" "}
        </button>
        <button onClick={() => setTagsArray([...tagsArray, "React"])}>
          {" "}
          React{" "}
        </button>
        <button onClick={() => setTagsArray([...tagsArray, "HTML"])}>
          {" "}
          HTML{" "}
        </button>
        <button onClick={() => setTagsArray([...tagsArray, "SQL"])}>
          {" "}
          SQL{" "}
        </button>
        <button onClick={() => setTagsArray((prev) => [...prev, "front-end"])}>
          {" "}
          Front End{" "}
        </button>
        <button onClick={() => setTagsArray([...tagsArray, "back-end"])}>
          {" "}
          Back End{" "}
        </button>

        <p>Have you used this?</p>
        <select
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, usedreview: e.target.value })
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
          value={resourceSubmit.reason}
          onChange={(e) =>
            setResourceSubmit({ ...resourceSubmit, reason: e.target.value })
          }
        />
      </form>

      <button onClick={() => handleSubmitResource}> Submit resource</button>
    </div>
  );
}
