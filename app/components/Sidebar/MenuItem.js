"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
const MenuItem = ({ items }) => {
  const [open, setOpen] = useState(false);
  return (
    <ul className="pt-10 text-sm text-gray-300 font-semibold">
      {items &&
        items.map((item) => (
          <Item key={item.id} item={item} open={open} setOpen={setOpen} />
        ))}
    </ul>
  );
};

export default MenuItem;
