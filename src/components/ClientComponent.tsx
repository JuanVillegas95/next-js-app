"use client";

import { ReactNode } from "react";

export default function ClientComponent({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Client Component</h1>
      <p>This component manages client-side logic and renders its children:</p>
      <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
        {children}
      </div>
    </div>
  );
}
