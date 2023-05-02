"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import SubMenu from "./SubMenu";

const Item = ({ item }) => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <li
        key={item.id}
        className={`flex items-center justify-between px-4 py-2 ${
          item.href === pathname ? "bg-blue-600 text-white" : ""
        } text-gray-300 text-sm capitalize rounded-md font-medium hover:cursor-pointer hover:${
          item.href === pathname ? "" : "bg-gray-800"
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {item.href ? (
          <Link
            href={item.href || null}
            className="w-full h-full flex items-center"
          >
            {item.icon && <span>{item.icon}</span>}
            <p className="ml-2">{item.title}</p>
          </Link>
        ) : (
          <div className="flex items-center">
            {item.icon && <span>{item.icon}</span>}
            <p className="ml-2">{item.title}</p>
          </div>
        )}
        {item.subItems && (
          <ChevronDown
            size={16}
            className={`${
              open ? "rotate-180 " : null
            } transition-transform duration-500 ease-in-out`}
          />
        )}
      </li>
      {item.subItems && <SubMenu items={item.subItems} open={open} />}
    </>
  );
};

export default Item;
