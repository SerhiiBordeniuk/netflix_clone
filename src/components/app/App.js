import "./App.scss";
import MobileFilmPage from "../mobileFilmPage/MobileFilmPage";
import Mainpage from "../../pages/Mainpage";

import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [data, setData] = useState([]);

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/filmpage" element={<MobileFilmPage /* movie={modalData} */ />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
