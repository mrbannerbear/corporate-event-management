import Aos from "aos";
import Footer from "./footer/Footer";
import Header from "./header.jsx/Header";
import ServicesHome from "./services/ServicesHome";
import Credibility from "./credibility/Credibility";
import WorkedWith from "./workedWith/WorkedWith";

Aos.init()
const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServicesHome></ServicesHome>
            <Credibility></Credibility>
            <WorkedWith></WorkedWith>
            <Footer></Footer>
        </div>
    );
};

export default Home;