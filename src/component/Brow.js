
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovie';
import useNowPlayingMovies from '../hooks/userNowPlayingMovies';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpComingMovies from '../hooks/useUpComingMovies';

const Brow = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  return ( 
  <div>
   <Header/>
   {showGptSearch ? (
    <GptSearch />
  ) : (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  )}
</div>
);
};

export default Brow;