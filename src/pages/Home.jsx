import Logo from "../components/Logo";
import SignUpBar from "../components/SignUpBar";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

function Home(){
    return (
        <div>
            <SignUpBar />
            <Logo />
            <Navbar />
            <Carousel />
            <HomeContent />
            <Footer />
        </div>
    );
}
export default Home;