"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import fetcher from "../../../utils/fetcher";
import useSWR, { preload } from "swr";
import RequestList from "../../components/RequestList";
preload("http://localhost:3000/api/request", fetcher);
const RequestsPage = () => {
  const router = useRouter();
  const { data: requests, isLoading } = useSWR(
    "http://localhost:3000/api/request",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-10 flex flex-col grow">
      <div>
        <Button onClick={() => router.push("/requests/create")}>Create</Button>
      </div>
      <div className="w-[900px]">
        <RequestList requests={requests} />
      </div>
    </div>
  );
};

export default RequestsPage;
