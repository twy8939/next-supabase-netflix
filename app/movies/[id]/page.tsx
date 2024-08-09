"use client";

import { useParams } from "next/navigation";
import UI from "./ui";

export default function MovieDetail() {
  const { id } = useParams();
  return (
    <main className="flex items-center bg-blue-50 w-full absolute top-0 bottom-0 left-0 right-0">
      <UI id={id} />;
    </main>
  );
}
