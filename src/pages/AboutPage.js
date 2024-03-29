import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AboutDescription from "../components/AboutDescription/AboutDescription";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About" />
                <PageTop pagetitle="About Me" />
                <AboutDescription />
                <Footer />
            </Fragment>
        );
    }
}

export default AboutPage;