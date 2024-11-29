import '../index.css';
import MovieList from '../components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import Loader from '../components/Loader/Loader';
import ErrorNotice from '../components/ErrorNotice/ErrorNotice';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsErorr] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsErorr(false);
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        setIsErorr(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section style={{ paddingBlock: 24 }}>
      <div className="container">
        <h1 style={{ fontSize: 30, color: 'var(--main-color)' }}>Trending today</h1>
        {movies && <MovieList movies={movies} />}
        {isLoading && <Loader />}
        {error && <ErrorNotice />}
      </div>
    </section>
  );
};

export default HomePage;
