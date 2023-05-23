import React from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  children: React.ReactNode;
}

interface ItemProps extends GridProps {
  children: React.ReactNode;
  cols: Cols;
  gutter?: number;
}

const Item = ({ children, cols, gutter }: ItemProps) => {
  // return <div className={`flex basis-1/12`}>{children}</div>;
  return (
    <div
      style={{
        display: "flex",
        flexBasis: `${(cols / 12) * 100}%`,
        padding: `${gutter}px`,
      }}
    >
      {children}
    </div>
  );
};

const Grid = ({ children }: GridProps) => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
};

Grid.Item = Item;
export default Grid;
