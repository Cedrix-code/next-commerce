import { ReadonlyURLSearchParams } from "next/navigation";

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function ensureStartWith(stringToCheck: string, startsWith: string) {
    return stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;
}

export function createUrl(pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) {
    const paramsString = params.toString();
    const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

    return `${pathname}${queryString}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}