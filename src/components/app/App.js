import "./App.scss";
import Navbar from "../navbar/Navbar";
import FilmRow from "../filmRow/FilmRow";
import requests from "../../services/requests";
import Billboard from "../billboard/Billboard";
import Modal from "../modal/Modal";
import { useState } from "react";

function App() {
    const [modalActive, setModalActive] = useState(false);

    const updateModal = (value) => {
        setModalActive(value);
    };

    return (
        <div className="app">
            <Navbar />
            <Billboard fetchUrl={requests.fetchTrending} />
            <div className="filmslist">
                <FilmRow
                    fetchUrl={requests.fetchNetflixOriginals}
                    title="Netflix Originals"
                    updateModal={updateModal}
                />
                <FilmRow
                    fetchUrl={requests.fetchTrending}
                    title="Trending Now"
                    updateModal={updateModal}
                />
                <FilmRow
                    fetchUrl={requests.fetchTopRated}
                    title="Top Rated"
                    updateModal={updateModal}
                />
                <FilmRow
                    fetchUrl={requests.fetchActionMovies}
                    title="Action Movies"
                    updateModal={updateModal}
                />
            </div>
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    );
}

export default App;
