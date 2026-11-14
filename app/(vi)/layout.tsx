import type { ReactNode } from "react";
import { RootShell } from "@/components/layout/RootShell";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("vi");

export default function Layout({ children }: { children: ReactNode }) {
  return <RootShell locale="vi">{children}</RootShell>;
}
