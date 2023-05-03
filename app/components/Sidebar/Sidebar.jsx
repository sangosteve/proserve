"use client";
import { v4 as uuidv4 } from "uuid";
import MenuItem from "./MenuItem";
import Search from "../Search/Search";
import {
  LayoutGrid,
  Inbox,
  ClipboardList,
  Boxes,
  Package,
  Users,
} from "lucide-react";
const Sidebar = () => {
  const items = [
    {
      id: uuidv4(),
      title: "dashboard",
      href: "/",
      icon: <LayoutGrid size={18} />,
    },
    {
      id: uuidv4(),
      title: "requests",
      href: "/requests",
      icon: <Inbox size={18} />,
    },
    {
      id: uuidv4(),
      title: "work orders",
      href: "/work-orders",
      icon: <ClipboardList size={18} />,
    },
    {
      id: uuidv4(),
      title: "inventory",
      href: "/inventory",
      icon: <Boxes size={18} />,
    },
    {
      id: uuidv4(),
      title: "assets",
      href: "/assets",
      icon: <Package size={18} />,
    },
    {
      id: uuidv4(),
      title: "people",
      icon: <Users size={18} />,
      subItems: [
        {
          id: uuidv4(),
          title: "customers",
          href: "/customers",
        },
        {
          id: uuidv4(),
          title: "vendors",
          href: "/vendors",
        },
        {
          id: uuidv4(),
          title: "users",
          href: "/users",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "reports",
      href: "/reports",
      icon: <Package size={18} />,
    },
  ];
  return (
    <nav className="fixed w-60 h-screen bg-gray-900 px-2 scroll-auto">
      <Search />
      <MenuItem items={items} />
    </nav>
  );
};

export default Sidebar;
