"use client";
import React from "react";
import { useSession, getSession } from "next-auth/react";

const requests = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return <div>requests</div>;
};

export default requests;
