import placeholder_image from "../components/images/eo-comics-welcome-image.jpeg";
import eo_comics_banner from "../components/images/eo-comics-banner-logo.png";
import "./css/Carousel.css"

function Carousel(props){
    return(
        <div class="p-2">
            <div class="container-lg comic-book-border px-0">
                <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={eo_comics_banner} class="carousel-img" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={placeholder_image} class="carousel-img" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={placeholder_image} class="carousel-img" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;