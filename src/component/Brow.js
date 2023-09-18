import useNowPlayingMovies from '../hooks/userNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Brow = () => {
  useNowPlayingMovies();
  return ( 
  <div>
   <Header/>
   <MainContainer/>
   <SecondaryContainer/>
  </div>
  );
};

export default Brow;