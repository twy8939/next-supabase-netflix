"use client";

import { getAllMovies } from "actions/movieActions";
import MovieCard from "./movie-card";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function MovieCardList() {
  const search = useRecoilValue(searchState);

  const getAllMoviesQuery = useQuery({
    queryKey: ["movie", search],
    queryFn: () => getAllMovies(search),
  });

  if (getAllMoviesQuery.isPending)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <div className="grid md:grid-cols-4 grid-cols-3 w-full h-full gap-1">
      {getAllMoviesQuery.data?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
