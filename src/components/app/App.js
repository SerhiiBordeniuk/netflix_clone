import "./App.scss";
import Navbar from "../navbar/Navbar";
import FilmRow from "../filmRow/FilmRow";
import requests from "../../services/requests";
import Billboard from "../billboard/Billboard";
import { MobileFilmPage } from "../mobileFilmPage/MobileFilmPage";
import Modal from "../modal/Modal";
import { useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [modalData, setModalData] = useState([]);

    const { width } = useWindowDimensions();

    const updateModal = (value, data) => {
        width > 767 ? setModalActive(value) : setModalActive(false);
        setModalData(data);
    };

    return (
        <div className="app">
            <Navbar />
            <Billboard updateModal={updateModal} />
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
            <Modal active={modalActive} setActive={setModalActive} movie={modalData} />
            {/* <MobileFilmPage movie={modalData} /> */}
        </div>
    );
}

export default App;
