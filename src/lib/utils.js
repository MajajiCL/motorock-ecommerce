import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCLP(amount) {
  return `$${Number(amount || 0).toLocaleString("es-CL")} CLP`;
}
