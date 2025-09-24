import Logo from "../components/Logo";
import SignUpBar from "../components/SignUpBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";

function Shows(){
    return(
        <div>
            <SignUpBar />
            <Logo />
            <Navbar />
            <div>
                <Title title="Shows"/>
                <h2>Featured Shows</h2>
                {/* Banner with featured shows to watch */}
                <h2>Zach Against the World</h2>
                {/* Banner with Zach Against the World */}
                <h2>Lisa's Life</h2>
                {/* Banner with Lisa's Life */}
                <h2>Guardians of RPG</h2>
                {/* Banner with Guardians of RPG */}
                <h2>Operation SOS</h2>
                {/* Banner with SOS */}
            </div>
            <Footer />
        </div>
    );
}
export default Shows