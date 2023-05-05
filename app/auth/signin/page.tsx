"use client";
import { Button } from "../../components/ui/button";
import React from "react";
import "../../globals.css";
import { Separator } from "../../components/ui/separator";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import Image from "next/image";
import { signIn } from "next-auth/react";
const signin = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[538px] px-20 py-16 border border-gray-300 shadow-sm rounded-md flex flex-col items-center justify-center self-center">
        <h5 className="text-indigo-700 text-xl font-semibold">
          Welcome back!Sign In
        </h5>
        <Button
          onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
          variant="outline"
          className="w-full mt-6"
        >
          <Image
            width={16}
            height={16}
            alt="Picture of the author"
            src="/glogo.png"
          />
          <text className="ml-2">Login with Google</text>
        </Button>
        <text className="text-gray-400 font-medium mt-6">OR USE EMAIL</text>
        <form className="mt-6 flex flex-col w-full">
          <div className="flex flex-col items-start">
            <Label>Email</Label>
            <Input placeholder="Enter your Email" className="mt-2" />
          </div>
          <div className="flex flex-col items-start mt-4">
            <Label>Password</Label>
            <Input
              type={"password"}
              placeholder="Enter your Password"
              className="mt-2"
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <Checkbox />
              <small className="text-indigo-600 font-medium ml-1">
                Keep me signed in
              </small>
            </div>

            <small className="text-indigo-600 font-medium ml-1">
              Forgot password?
            </small>
          </div>
          <Button className="mt-6">Login</Button>

          <div className="mt-6 text-gray-400 flex items-center justify-center font-medium">
            Don't have an account?{" "}
            <text className="text text-indigo-700">Sign up</text>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signin;
