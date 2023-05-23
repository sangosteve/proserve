"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { format } from "date-fns";
import { RequestType } from "../../../types";
import { Key } from "react";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const requests = () => {
  const [requests, setRequests] = useState([]);
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin");
    },
  });

  async function fetchRequests() {
    const response = await fetch("http://localhost:3000/api/request", {
      method: "GET",
    });

    const reqs = await response.json();
    setRequests(reqs);
    console.log(requests);
  }

  useEffect(() => {
    fetchRequests();
  }, [requests]);

  return (
    <div className="p-10 flex flex-col grow">
      <div>
        <Button onClick={() => router.push("/requests/create")}>Create</Button>
      </div>
      <div className="w-[600px]">
        <Table>
          <TableCaption>A list of your requests.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Submitted Date</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request: RequestType) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.title}</TableCell>
                <TableCell>{request.description}</TableCell>
                <TableCell>{format(new Date(request.created), "PP")}</TableCell>
                <TableCell>{request.priority.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default requests;
