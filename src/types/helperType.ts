import { ReactNode } from "react";

export type MenuItemType = {
  icon: ReactNode;
  id: string;
  path: string;
  state?: {
    mode: "view" | "self" | "friend";
  };
};
