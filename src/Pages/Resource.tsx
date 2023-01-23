import { useParams } from "react-router-dom";
import { IResource, IUser } from "../interfaces";
import { formatTags } from "../utils/formatTags";

interface ResourceProps {
  users: IUser[];
  allResources: IResource[];
}

export function Resource({ allResources, users }: ResourceProps): JSX.Element {
  const { resourceID } = useParams();
  const oneResourceArray = allResources.filter(
    (resource) => resource.resource_id === Number(resourceID)
  );
  const oneResource = oneResourceArray[0];
  const filteredUser = users.filter(
    (user) => user.user_id === oneResource.user_id
  );
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
      {formatTags(oneResource.tags).map(tag=>
        <p key = {tag}> {tag}</p>
      )}
    </>
  );
}
