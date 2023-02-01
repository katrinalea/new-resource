export interface IResource {
  resource_id: number;
  resource_url: string;
  author_name: string;
  resource_name: string;
  resource_description: string;
  tags: string[];
  content_type: string;
  selene_week: string;
  time_of_post: string;
  user_id: number;
  usage_status: string;
  recommendation_reason: string;
}

export interface ISubmitResource {
  resource_url: string;
  author_name: string;
  resource_name: string;
  resource_description: string;
  tags: string[];
  content_type: string;
  selene_week: string;
  usage_status: string;
  recommendation_reason: string;
  user_id: number | null;
}

export interface ILike {
  resource_id: number;
  user_id: number;
  is_liked: boolean;
  liked_id: number;
}

export interface IComment {
  resource_id: number;
  commment_id: number;
  user_id: number;
  comment: string;
}

export interface IUser {
  user_id: number | null;
  user_name: string;
  faculty_status: boolean;
}

export interface IToDo {
  to_do_item_id: number;
  user_id: number;
  resource_id: number;
}
export interface IToDoResource {
  resource_id: number;
  resource_url: string;
  author_name: string;
  resource_name: string;
  resource_description: string;
  tags: string[];
  content_type: string;
  selene_week: string;
  time_of_post: string;
  user_id_posted: number;
  usage_status: string;
  recommendation_reason: string;
  to_do_item_id: number;
  user_id: number;
}
