export default function UI({
  movie,
}: {
  movie: {
    id: number;
    image_url: string;
    overview: string;
    popularity: number;
    release_date: string;
    title: string;
    vote_average: number;
  };
}) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src={movie.image_url} alt="Dune" className="w-1/3" />
      <div className="md:w-2/3 w-full flex flex-col items-center md:items-start p-6 gap-4">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-lg font-medium">{movie.overview}</p>
        <div className="font-bold text-lg">
          <i className="fas fa-star mr-1" />
          Vote Average: {movie.vote_average}
        </div>
        <div className="font-bold text-lg">Popularity: {movie.popularity}</div>
        <div className="font-bold text-lg">
          Release Date: {movie.release_date}
        </div>
      </div>
    </div>
  );
}
