"use client";
import React, { Fragment } from "react";
import { Tab as HeadlessTab } from "@headlessui/react";
import clsx from "clsx";

interface TabGroupProps {
  children?: React.ReactNode;
}

export function TabGroup({ children }: TabGroupProps) {
  return (
    <HeadlessTab.Group as="div" className="w-full text-body">
      {children}
    </HeadlessTab.Group>
  );
}
interface TabListProps {
  children?: React.ReactNode;
}

export function TabList({ children }: TabListProps) {
  return (
    <HeadlessTab.List className="border-b border-neutral-200 text-neutral-400">
      {children}
    </HeadlessTab.List>
  );
}

interface TabProps {
  children?: React.ReactNode;
}
export function Tab({ children }: TabProps) {
  return (
    <HeadlessTab as={Fragment}>
      {({ selected }) => (
        <button
          className={clsx(
            selected ? "text-blue-500 outline-none border-0" : "",
            "px-2 py-1 hover:bg-blue-50 font-semibold"
          )}
        >
          {children}
        </button>
      )}
    </HeadlessTab>
  );
}

//className={"px-2 py-1 hover:bg-blue-50"}

interface TabPanelsProps {
  children?: React.ReactNode;
}

export function TabPanels({ children }: TabPanelsProps) {
  return <HeadlessTab.Panels>{children}</HeadlessTab.Panels>;
}

interface TabPanelProps {
  children?: React.ReactNode;
}

export function TabPanel({ children }: TabPanelProps) {
  return <HeadlessTab.Panel className={"p-2"}>{children}</HeadlessTab.Panel>;
}
// const Tab = () => {
//   return (
//     <HeadlessTab.Group>
//     <HeadlessTab.List>
//       <HeadlessTab>Tab 1</HeadlessTab>
//       <HeadlessTab>HeadlessTab 2</HeadlessTab>
//       <HeadlessTab>HeadlessTab 3</HeadlessTab>
//     </HeadlessTab.List>
//     <HeadlessTab.Panels>
//       <HeadlessTab.Panel>Content 1</HeadlessTab.Panel>
//       <HeadlessTab.Panel>Content 2</HeadlessTab.Panel>
//       <HeadlessTab.Panel>Content 3</HeadlessTab.Panel>
//     </HeadlessTab.Panels>
//   </HeadlessTab.Group>
//   )
// }

// export default Tab
