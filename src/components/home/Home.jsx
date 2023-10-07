import Aos from "aos";
import FeaturedIn from "./featuredIn/FeaturedIn";
import Footer from "./footer/Footer";
import Header from "./header.jsx/Header";

Aos.init()
const Home = () => {
    return (
        <div>
            <Header></Header>
            <FeaturedIn></FeaturedIn>
            <Footer></Footer>
        </div>
    );
};

export default Home;