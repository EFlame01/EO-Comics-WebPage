import Logo from "../components/Logo";
import SignUpBar from "../components/SignUpBar";
import Navbar from "../components/Navbar";
import ComicButton from "../components/ComicButton";
import Footer from "../components/Footer";
import eo_comics_banner from "../components/images/eo-comics-banner-logo.png";

function Comics(){
    return (
        <div class="eo-comics-bg">
            <SignUpBar />
            <Logo />
            <Navbar />
            <div class="px-2">
                <div class="container-lg comic-book-border bg-blue mb-2">
                    <ComicButton comic_name="Comic Book 1" img_banner={eo_comics_banner} />
                    <ComicButton comic_name="Comic Book 2" img_banner={eo_comics_banner} />
                    <ComicButton comic_name="Comic Book 3" img_banner={eo_comics_banner} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Comics;