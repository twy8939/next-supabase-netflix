"use client";

import { useParams } from "next/navigation";
import UI from "./ui";
import { getMovie } from "actions/movieActions";

export default async function MovieDetail() {
  const { id } = useParams();

  const movie = await getMovie(id);

  return (
    <main className="flex items-center bg-blue-50 w-full absolute top-0 bottom-0 left-0 right-0">
      {movie ? <UI movie={movie} /> : <div>Movie does not exists</div>};
    </main>
  );
}
