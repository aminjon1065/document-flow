import logo from "./logo.svg";
import "./App.scss";
import MainPage from "./pages/Main";
import Header from "./components/header/index";
import About from "./pages/About/index";
import Routes from "./pages/Routes";

function App() {
    return (
        <>
            <Header/>
            <Routes/>
        </>
    );
}

export default App;
