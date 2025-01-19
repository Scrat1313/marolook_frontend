import './App.css';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import React from "react";
import {Footer, Navbar} from "./components";
import {Home, About, Service, Portfolio, Contact, NotFound} from "./pages";
import routes from "./routes/routes";

// Composant wrapper pour vérifier la route actuelle
const AppContent = () => {
    const location = useLocation();
    const is404 = location.pathname !== routes.home &&
        location.pathname !== routes.about &&
        location.pathname !== routes.service &&
        location.pathname !== routes.portfolio &&
        location.pathname !== routes.contact;

    return (
        <>
            {!is404 && <Navbar/>}
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.about} element={<About/>}/>
                <Route path={routes.service} element={<Service/>}/>
                <Route path={routes.portfolio} element={<Portfolio/>}/>
                {/*<Route path={routes.blog} element={<Blog/>}/>*/}
                <Route path={routes.contact} element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            {!is404 && <Footer/>}
        </>
    );
};

function App() {
    return (
        <Router>
            <AppContent/>
        </Router>
    );
}

export default App;