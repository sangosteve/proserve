"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";

const requests = () => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin");
    },
  });

  console.log(session);

  return (
    <div>
      <Button onClick={() => router.push("/requests/create")}>Create</Button>
    </div>
  );
};

export default requests;
