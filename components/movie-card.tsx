"use client";

import Link from "next/link";

export default function MovieCard() {
  return (
    <div className="col-span-1 relative">
      <img
        src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
        className="w-full"
        alt="Dune"
      />
      <Link href={"/movies/1"}>
        <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300">
          <p className="font-bold text-white text-xl">Dune: Part Two</p>
        </div>
      </Link>
    </div>
  );
}
