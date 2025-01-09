import '../index.css';
import MovieList from '../components/MovieList/MovieList';
import s from '../pages/HomePage.module.css';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../services/api';
import ErrorNotice from '../components/ErrorNotice/ErrorNotice';
import LottieAnimationHome from '../components/LottieAnimationHome/LottieAnimationHome';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setIsErorr] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsErorr(false);
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        setIsErorr(true);
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <section className={s.hero}>
      <div className={`${s['hero-container']} container`}>
        <div className={s['hero-left']}>
          <h1 className={s['hero-title']}>Trending today</h1>
          {movies && <MovieList movies={movies} />}
        </div>
        <LottieAnimationHome />
        {error && <ErrorNotice />}
      </div>
    </section>
  );
};

export default HomePage;
