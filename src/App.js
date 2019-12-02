import React from 'react';
import HomePage from "./pages/HomePage";
import PageTop from "./components/PageTop/PageTop";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AboutDescription from "./components/AboutDescription/AboutDescription";
import AboutPage from "./pages/AboutPage";
import CoursePage from "./pages/CoursePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactSection from "./components/ContactSection/ContactSection";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import AppRoute from "./router/AppRoute";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <AppRoute />
    </BrowserRouter>
  );
}

export default App;
