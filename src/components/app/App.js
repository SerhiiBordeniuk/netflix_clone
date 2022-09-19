import './App.scss';
import Navbar from '../navbar/Navbar';
import FilmRow from '../filmRow/FilmRow';
import requests from '../../services/requests';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <FilmRow fetchUrl={requests.fetchNetflixOriginals}/>
          <FilmRow fetchUrl={requests.fetchTrending}/>
      </header>
    </div>
  );
}

export default App;
