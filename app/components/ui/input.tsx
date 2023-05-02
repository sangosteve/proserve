import * as React from "react";

import { cn } from "../../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex w-full rounded-sm border border-gray-300 bg-transparent py-1.5 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:border-indigo-600 disabled:cursor-not-allowed disabled:opacity-50 ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
