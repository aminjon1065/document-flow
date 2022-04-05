import logo from "./logo.svg";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import Header from "./components/header/index";
import About from "./pages/About/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
