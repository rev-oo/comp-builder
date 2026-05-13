import type { ReactNode } from "react";
import { H3 } from "./Heading";

export default function Section ({ children, title }: { children: ReactNode, title: string }) {
  return (
    <div className="border rounded-xl p-4">
      <H3 className="mb-2">{title}</H3>
      {children}
    </div>
  );
}
