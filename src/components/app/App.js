import "./App.scss";
import MobileFilmPage from "../mobileFilmPage/MobileFilmPage";
import Mainpage from "../../pages/Mainpage";

import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/movies/:id" element={<MobileFilmPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
