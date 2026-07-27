import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface LexicalNode {
  type?: string;
  text?: string;
  children?: LexicalNode[];
}

/**
 * Extracts plain text from a Payload/Lexical richText JSON value.
 * Used where an existing component only accepts a plain string.
 */
export function richTextToPlainText(value: unknown): string {
  if (!value || typeof value !== "object") {
    return "";
  }

  const root = (value as { root?: LexicalNode }).root;

  if (!root) {
    return "";
  }

  const collect = (node: LexicalNode): string => {
    if (typeof node.text === "string") {
      return node.text;
    }

    if (!node.children) {
      return "";
    }

    return node.children
      .map(collect)
      .join(node.type === "paragraph" ? " " : "");
  };

  return collect(root).replace(/\s+/g, " ").trim();
}
