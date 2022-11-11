import React from "react";

import Navbar from "../components/navbar/Navbar";
import FilmRow from "../components/filmRow/FilmRow";
import requests from "../services/requests";
import Billboard from "../components/billboard/Billboard";
import Modal from "../components/modal/Modal";
import { useState } from "react";

const Mainpage = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalData, setModalData] = useState([]);

    const updateModal = (value, data) => {
        window.innerWidth > 767 ? setModalActive(value) : setModalActive(false);
        setModalData(data);
    };

    return (
        <>
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
        </>
    );
};

export default Mainpage;
