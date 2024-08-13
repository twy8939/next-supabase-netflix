"use client";

import { getAllMovies } from "actions/movieActions";
import MovieCard from "./movie-card";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";
import { useRecoilValue } from "recoil";
import { searchState } from "utils/recoil/atoms";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function MovieCardList() {
  const search = useRecoilValue(searchState);

  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: ["movie", search],
      queryFn: ({ pageParam }) =>
        getAllMovies({ search, page: pageParam, pageSize: 12 }),
      getNextPageParam: (lastPage) =>
        lastPage.page ? lastPage.page + 1 : null,
    });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <div className="grid md:grid-cols-4 grid-cols-3 w-full h-full gap-1">
      <>
        {data?.pages?.map((page) =>
          page.data
            .flat()
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
        <Spinner ref={ref} />
      </>
    </div>
  );
}
