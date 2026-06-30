"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-green-600 hover:shadow-accent/35",
  secondary:
    "bg-white text-primary border border-slate-200 hover:border-slate-300 hover:bg-slate-50",
  outline:
    "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${fullWidth ? "w-full" : ""} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div
        className={fullWidth ? "w-full" : undefined}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
