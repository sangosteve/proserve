"use client";
import useSWR from "swr";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

import { PriorityType } from "../../../../types";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import { Input } from "../../../components/ui/input";
import { useForm } from "react-hook-form";
import { Label } from "../../../components/ui/label";
import { useEffect, useState } from "react";

const fetcher = (url) =>
  fetch(url, { method: "GET" }).then((res) => res.json());

const Update_Requests = ({ params }) => {
  const [values, setValues] = useState([]);
  const [priorityId, setPriority] = useState("");
  const [users, setUsers] = useState([]);
  const {
    data: request,
    error: request_fetch_error,
    isLoading: request_fetch_loading,
  } = useSWR(`http://localhost:3000/api/request/${params.id}`, fetcher);
  const {
    data: priorities,
    error: priorities_fetch_erro,
    isLoading: priorities_fetch_loading,
  } = useSWR(`http://localhost:3000/api/priority`, fetcher);

  const handleChange = (e) => {
    setValues((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "GET",
      });
      const data = await res.json();
      setUsers(data);
    }

    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3000/api/request/${params.id}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setValues(data);
    };

    fetchData();
    fetchUsers();
  }, []);

  console.log("priorityId:", priorityId);
  const onSubmit = (e) => {
    values.priorityId = priorityId;
    e.preventDefault();
    console.log("onSubmit:", values);
  };

  const saveWithoutUpdating = async () => {
    const updatedValues = {
      title: values.title,
      description: values.description,
      priorityId: values.priorityId,
      approverId: values.approverId,
    };
    const res = await fetch(
      `http://localhost:3000/api/request/edit/${params.id}`,
      {
        method: "POST",
        body: JSON.stringify(updatedValues),
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(res);
  };
  const approveRequest = async () => {
    const updatedValues = {
      title: values.title,
      description: values.description,
      priorityId: values.priorityId,
      approverId: values.approverId,
      status: "APPROVED",
    };
    const res = await fetch(
      `http://localhost:3000/api/request/edit/${params.id}`,
      {
        method: "POST",
        body: JSON.stringify(updatedValues),
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(res);
  };
  const rejectRequest = async () => {
    const updatedValues = {
      title: values.title,
      description: values.description,
      priorityId: values.priorityId,
      approverId: values.approverId,
      status: "REJECTED",
    };
    const res = await fetch(
      `http://localhost:3000/api/request/edit/${params.id}`,
      {
        method: "POST",
        body: JSON.stringify(updatedValues),
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(res);
  };
  return (
    <div className="p-10 flex flex-col grow">
      <div className="w-[600px]">
        <form onSubmit={onSubmit}>
          <div className="w-full flex  items-center justify-between">
            <div className="w-full px-2 flex flex-col items-start justify-start">
              <Label htmlFor="name">Title</Label>
              <Input
                name="title"
                className="mt-1"
                value={values.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full flex  items-center justify-between mt-4">
            <div className="w-full px-2 flex  flex-col items-start justify-start ">
              <Label htmlFor="name">Description</Label>
              <Textarea
                className="mt-1"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full flex  items-center justify-between mt-4">
            <div className="w-full px-2 flex  flex-col items-start justify-start ">
              <Label htmlFor="name">Priority</Label>
              <Select
                name="priority"
                onValueChange={(value) => setPriority(value)}
              >
                <SelectTrigger name="priority">
                  <SelectValue placeholder={request?.priority?.description} />
                </SelectTrigger>

                <SelectContent>
                  {priorities?.map((priority) => (
                    <SelectItem
                      value={priority.id}
                      defaultValue={request?.priority?.id}
                      defaultChecked={true}
                    >
                      {priority.description}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-full flex  items-center justify-between mt-4">
            <div className="w-full px-2 flex  flex-col items-start justify-start ">
              <Label htmlFor="name">Approver</Label>
              <Select
                name="priority"
                onValueChange={(value) => setPriority(value)}
              >
                <SelectTrigger name="priority">
                  <SelectValue placeholder={request?.approver.name} />
                </SelectTrigger>

                <SelectContent>
                  {users?.map((user) => (
                    <SelectItem value={user.id}>
                      <div className="flex items-center">
                        <Image
                          style={{
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                          src={user?.image}
                          width={24}
                          height={24}
                          alt="avatar"
                        />
                        {user.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8">
            <Button variant={"destructive"} onClick={rejectRequest}>
              Reject Request
            </Button>
            <Button variant={"outline"} onClick={saveWithoutUpdating}>
              Save Without Approving
            </Button>
            <Button onClick={approveRequest}>Approve Request</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update_Requests;
