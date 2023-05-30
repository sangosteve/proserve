import { Key } from "react";
export type RequestType = {
  id: Key;
  title: string;
  description: string;
  created: Date;
  priorityId: string;
  priority: PriorityType;
  requester: UserType;
  approver: UserType;
  status: string;
};

export type PriorityType = {
  id: string;
  description: string;
  created: Date;
  Request: Request[];
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  image: string;
};
