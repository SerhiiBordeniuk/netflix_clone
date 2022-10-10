import "./App.scss";
import Navbar from "../navbar/Navbar";
import FilmRow from "../filmRow/FilmRow";
import requests from "../../services/requests";
import Billboard from "../billboard/Billboard";
import Modal from "../modal/Modal";
import { useState } from "react";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [modalData, setModalData] = useState([]);

    const updateModal = (value, data) => {
        setModalActive(value);
        setModalData(data);
    };

    console.log(modalData, modalActive);

    return (
        <div className="app">
            <Navbar />
            <Billboard fetchUrl={requests.fetchTrending} />
            <div className="filmslist">
                <FilmRow
                    fetchUrl={requests.fetchNetflixOriginals}
                    title="Netflix Originals"
                    updateModal={updateModal}
                    data={setModalData}
                />
                <FilmRow
                    fetchUrl={requests.fetchTrending}
                    title="Trending Now"
                    updateModal={updateModal}
                    data={setModalData}
                />
                <FilmRow
                    fetchUrl={requests.fetchTopRated}
                    title="Top Rated"
                    updateModal={updateModal}
                    data={setModalData}
                />
                <FilmRow
                    fetchUrl={requests.fetchActionMovies}
                    title="Action Movies"
                    updateModal={updateModal}
                    data={setModalData}
                />
            </div>
            <Modal active={modalActive} setActive={setModalActive} movie={modalData} />
        </div>
    );
}

export default App;
