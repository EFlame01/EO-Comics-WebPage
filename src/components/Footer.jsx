import "./css/styles.css"
import "./css/Footer.css"
import logo from "./images/logo.jpg"
import youtube_logo from "./images/youtube-logo.png"
import instagram_logo from "./images/instagram-logo.png"
import twitter_logo from "./images/twitter-logo.png"
import tiktok_logo from "./images/tiktok-logo.png"
import itch_io_logo from "./images/itch-io-logo.png"
import patreon_logo from "./images/patreon-logo.png"

function Footer(){
    return (
        <footer className="">
            <div className="text-center my-2">
                <img src={logo} className="footer-logo logo-circle py-1" alt="EO Comics Logo" />
            </div>
            <div className="container-fluid text-center py-1 my-2">
                <a className="px-1" href="https://www.youtube.com/@eo_comics">
                    <img src={youtube_logo} className="footer-logo" alt="YouTube Logo" />
                </a>
                <a className="px-1" href="https://www.instagram.com/eo_comics/">
                    <img src={instagram_logo} className="footer-logo" alt="Instagram Logo" />
                </a>
                <a className="px-1" href="https://twitter.com/eo_comics">
                    <img src={twitter_logo} className="footer-logo" alt="Twitter Logo" />
                </a>
                <a className="px-1" href="https://www.tiktok.com/@eo_comics">
                    <img src={tiktok_logo} className="footer-logo" alt="TikTok Logo" />
                </a>
                <a className="px-1" href="https://eo-comics.itch.io/">
                    <img src={itch_io_logo} className="footer-logo" alt="Itch.io Logo" />
                </a>
                <a className="px-1" href="https://www.patreon.com/EOComics">
                    <img src={patreon_logo} className="footer-logo" alt="Patreon Logo" />
                </a>
            </div>
            <div className="text-center mt-2">
                <p>EO Comics. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;