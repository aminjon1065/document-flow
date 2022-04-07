import React, {useEffect} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import MainPage from "./Main";
import About from "./About";
import SignIn from "./Auth/SignIn";

const RoutesIndex = () => {
    const auth = true;
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth) {
            navigate('/sign-in')
        } else navigate('/');
    }, [])
    return (
        <>
            <Routes>
                <Route path="/" exact element={<MainPage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
            </Routes>
        </>
    );
};

export default RoutesIndex;