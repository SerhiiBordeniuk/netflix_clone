import "./App.scss";
import Navbar from "../navbar/Navbar";
import FilmRow from "../filmRow/FilmRow";
import requests from "../../services/requests";
import Billboard from "../billboard/Billboard";
import Modal from "../modal/Modal";
import { useState } from "react";

function App() {
    const [modalActive, setModalActive] = useState(true);

    return (
        <div className="app">
            <Navbar />
            <Billboard fetchUrl={requests.fetchTrending} />
            <div className="filmslist">
                <FilmRow fetchUrl={requests.fetchNetflixOriginals} title="Netflix Originals" />
                <FilmRow fetchUrl={requests.fetchTrending} title="Trending Now" />
                <FilmRow fetchUrl={requests.fetchTopRated} title="Top Rated" />
                <FilmRow fetchUrl={requests.fetchActionMovies} title="Action Movies" />
            </div>
            <Modal active={modalActive} setctive={setModalActive} />
        </div>
    );
}

export default App;
