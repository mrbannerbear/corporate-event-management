import Aos from "aos";
import FeaturedIn from "./featuredIn/FeaturedIn";
import Footer from "./footer/Footer";
import Header from "./header.jsx/Header";
import ServicesHome from "./services/ServicesHome";
import Credibility from "./credibility/Credibility";

Aos.init()
const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServicesHome></ServicesHome>
            <Credibility></Credibility>
            <FeaturedIn></FeaturedIn>
            <Footer></Footer>
        </div>
    );
};

export default Home;