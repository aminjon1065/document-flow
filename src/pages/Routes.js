import React from 'react';
import {Route} from "react-router-dom";
import MainPage from "./Main";
import About from "./About";

const Routes = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default Routes;