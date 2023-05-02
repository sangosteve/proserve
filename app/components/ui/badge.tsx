import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
const badgeStyles = cva(
  "inline-flex  text-center text-xs font-semibold  px-4 py-0.5 rounded-full",
  {
    variants: {
      intent: {
        info: "text-indigo-600",
        warning: "text-warning-600",
        success: "text-success-600",
        error: "text-error-600",
      },
      variant: {
        light: "",
        filled: "",
        outline: "bg-transparent",
      },
    },
    compoundVariants: [
      //Light
      {
        intent: "info",
        variant: "light",
        className: "bg-indigo-200 border-0 text-indigo-600",
      },
      {
        intent: "info",
        variant: "outline",
        className: "border border-indigo-600",
      },
      {
        intent: "info",
        variant: "filled",
        className: "bg-indigo-600 border-0 text-white",
      },
      {
        intent: "warning",
        variant: "light",
        className: "bg-warning-200 border-0 text-warning-600",
      },
      {
        intent: "warning",
        variant: "outline",
        className: "border border-warning-600",
      },
      {
        intent: "warning",
        variant: "filled",
        className: "bg-warning-600 border-0 text-white",
      },
      {
        intent: "success",
        variant: "light",
        className: "bg-success-200 border-0 text-success-600",
      },
      {
        intent: "success",
        variant: "filled",
        className: "bg-success-600 border-0 text-white",
      },
      {
        intent: "success",
        variant: "outline",
        className: "border border border-success-600",
      },

      {
        intent: "error",
        variant: "light",
        className: "bg-error-200 border-0 text-error-600",
      },
      //Filled

      {
        intent: "error",
        variant: "filled",
        className: "bg-error-600 border-0 text-white",
      },
      //Outline
      {
        intent: "error",
        variant: "outline",
        className: "border border-error-600",
      },
    ],
  }
);

export interface BadgeProps extends VariantProps<typeof badgeStyles> {
  intent?: "info" | "warning" | "success" | "error";
  variant?: "light" | "filled" | "outline";
  children?: React.ReactNode;
  className?: string;
}

const Badge = ({
  intent,
  variant,
  children,
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={twMerge(badgeStyles({ intent, variant, className }))}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
