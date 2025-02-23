import Title from "./Title";
import "./css/HomeContent.css"
import placeholder_image from "../components/images/Welcome Image.jpeg";

function HomeContent(props){
    return (
        <div class="py-2">
            <div class="container-lg row mx-auto">
                {/* Blog */}
                <div class="col-7 px-2 my-auto">
                    <Title title="News" />
                    <a class="btn blog-btn px-0 py-0 comic-book-border" role="button" href="/home">
                        <img src={placeholder_image} class="blog-news-img" alt="..."/>
                    </a>
                </div>
                <div class="col-1" />
                {/* content 1 and 2 */}
                <div class="col-4 px-2 my-auto">
                    <Title title="Entertainment" />
                    <div class="card comic-book-border my-2">
                        <img src={placeholder_image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/home" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card comic-book-border my-2">
                        <img src={placeholder_image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/home" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;