import { twMerge } from "tailwind-merge";
import clsx from 'clsx';

export function mergeClasses(baseClasses: string, className?: string) {
  return twMerge(clsx(baseClasses, className))
}