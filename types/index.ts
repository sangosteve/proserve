import { Key } from "react";
export type RequestType = {
  id: Key;
  title: String;
  description: String;
  created: Date;
  priorityId: String;
  priority: PriorityType;
};

export type PriorityType = {
  id: String;
  description: String;
  created: Date;
  Request: Request[];
};
