import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import {Footer, Navbar} from "./components";
import {Home} from "./pages";
import routes from "./routes/routes";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
