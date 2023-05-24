"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { PriorityType } from "../../../../types";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Toaster } from "../../../components/ui/toaster";
import { useToast } from "../../../hooks/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  priorityId: z.string({
    required_error: "Please select priority.",
  }),
  approverId: z.string({
    required_error: "Please select priority.",
  }),
});

const CreateRequests = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [priorities, setPriorities] = useState([]);
  const [users, setUsers] = useState([]);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/signin");
    },
  });
  console.log(session?.user);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      priorityId: "",
      approverId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await fetch("http://localhost:3000/api/request/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then(() => {
        toast({
          title: "Success",
          description: "Request created successfully.",
        });
      })
      .then(() => {
        router.push("/requests");
      });
  }

  async function fetchPriorities() {
    const res = await fetch("http://localhost:3000/api/priority", {
      method: "GET",
    });
    const data = await res.json();
    setPriorities(data);
  }
  async function fetchUsers() {
    const res = await fetch("http://localhost:3000/api/user", {
      method: "GET",
    });
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchPriorities();
    fetchUsers();
  }, [priorities, users]);
  return (
    <div className="p-10 flex flex-col grow">
      <Toaster />
      <div className="w-[400px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    A summary of the problem or issue
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    Describe the problem in full
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priorityId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {priorities?.map((priority: PriorityType) => (
                        <SelectItem value={priority?.id}>
                          {priority?.description?.toUpperCase()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    You can manage email addresses in your
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="approverId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Approver</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {users?.map((user) => (
                        <SelectItem value={user?.id}>
                          <div className="flex items-center gap-1">
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
                            {user?.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    You can manage email addresses in your
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateRequests;
