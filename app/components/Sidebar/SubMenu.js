import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";
const SubMenu = ({ items, open }) => {
  const pathname = usePathname();
  return (
    <ul
      //   style={{
      //     maxHeight: `${open ? "500px" : 0}`,
      //     overflow: "hidden",
      //     transition: "max-height 0.40s ease-in-out",
      //   }}
      className={`${
        open ? "max-h-[500px]" : "max-h-0"
      } bg-gray-800 rounded-md px-2 my-1  overflow-hidden transition-[max-height] duration-500 ease-in-out`}
    >
      {items &&
        items.map((item) => (
          <li
            key={item.id}
            className="my-2 px-8 py-2 hover:bg-gray-900 hover:cursor-pointer rounded-md"
          >
            <Link
              className={`w-full h-full ${
                item.href === pathname ? "text-blue-600" : ""
              }`}
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SubMenu;
