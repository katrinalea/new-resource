export interface IResource {
  resourceid: number;
  url: string;
  author: string;
  title: string;
  desc: string;
  tags: string[];
  type: string;
  week: number;
  timeStamp: string;
  userid: number;
  usedreview: string;
  reason: string;
}

export interface ILike {
  resourceid: number;
  userid: number;
  liked: boolean;
}

export interface IComment {
  resourceid: number;
  commmentid: number;
  userid: number;
  comment: string;
}

export interface IUser {
  userid: number;
  username: string;
  status: string;
}

export interface IToDo {
  itemid: number;
  userid: number;
  resourceid: number;
}
