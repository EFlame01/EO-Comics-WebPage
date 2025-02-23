import placeholder_image from "../components/images/Welcome Image.jpeg";
import Title from "./Title";

function SecondarySection(props){
    return(
        <div class="col-lg-4 col-sm-12 px-2 m-auto">
            <Title title="Entertainment" />
            <div class="card comic-book-border sec-sec">
                <img src={placeholder_image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/home" class="btn btn-red">Go somewhere</a>
                </div>
            </div>
            <div class="py-2" />
            <div class="card comic-book-border sec-sec">
                <img src={placeholder_image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/home" class="btn btn-red">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default SecondarySection;