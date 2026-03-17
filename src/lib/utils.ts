import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function withBasePath(path: string) {
  const basePath = '/FemAxeHub';
  if (path.startsWith(basePath)) return path;
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
}
