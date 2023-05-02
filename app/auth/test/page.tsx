"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
const page = () => {
  return (
    <div className="w-screen h-screen">
      <NavigationMenu.Root orientation="vertical">
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};

export default page;
