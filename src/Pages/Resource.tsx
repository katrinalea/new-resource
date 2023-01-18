import { IResource } from "../interfaces"

interface ResourceProps{
    oneResource: IResource
}


export function Resource({oneResource}: ResourceProps): JSX.Element{
    
    
    return  (
<>
<h1>{oneResource.resource_name}</h1>
<h2>{oneResource.author_name}</h2>
<p>{oneResource.resource_description}</p>
<p>{oneResource.recommendation_reason}</p>
<a href= {oneResource.resource_url}>{oneResource.resource_url}</a>
{/* <p>{oneResource.</p> HOW TO GET THE USER NAME*/} 
<small>{oneResource.time_of_post}</small>
<p>{oneResource.selene_week}</p>
<p>{oneResource.content_type}</p>
<p>{oneResource.usage_status}</p>
<p>{oneResource.tags}</p>
</>
    )
}