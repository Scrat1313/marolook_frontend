import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import {Footer, Navbar} from "./components";
import {Home, About, Service, Portfolio, Blog, Contact} from "./pages";
import routes from "./routes/routes";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.about} element={<About/>}/>
                <Route path={routes.service} element={<Service/>}/>
                <Route path={routes.portfolio} element={<Portfolio/>}/>
                <Route path={routes.blog} element={<Blog/>}/>
                <Route path={routes.contact} element={<Contact/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
