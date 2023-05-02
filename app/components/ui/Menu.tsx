"use client";
import React, { Fragment } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import clsx from "clsx";

export const MenuButton = HeadlessMenu.Button;

interface MenuProps {
  children?: React.ReactNode;
}

export function Menu({ children }: MenuProps) {
  return (
    <HeadlessMenu as="div" className="relative">
      {children}
    </HeadlessMenu>
  );
}

export interface MenuItemProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}

export function MenuItem({ children, ...props }: MenuItemProps) {
  return (
    <HeadlessMenu.Item>
      {({ active }) => (
        <button
          className={clsx(
            active ? "dark:bg-gray-600 bg-gray-300 text-white bg-blue-500" : "",
            "px-4 py-1 text-body rounded-md flex items-center  gap-2 w-full"
          )}
          {...props}
        >
          {children}
        </button>
      )}
    </HeadlessMenu.Item>
  );
}

interface MenuItemsProps {
  children: React.ReactNode;
}

export function MenuItems({ children }: MenuItemsProps) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <HeadlessMenu.Items className="z-20 origin-top-left absolute left-0 mt-2 w-56 rounded-lg shadow-lg px-2 py-1 bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
        {children}
      </HeadlessMenu.Items>
    </Transition>
  );
}

/**const MenuC = () => {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
  
}

export default MenuC**/
