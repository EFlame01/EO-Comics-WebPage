import placeholder_image from "../components/images/eo-comics-welcome-image.jpeg";
import Title from "./Title";

function PrimarySection(props){
    return(
        <div class="col-lg-7 col-sm-12 px-2 my-auto">
            <Title title="News" />
            <div class="btn btn-comic-border prim-sec comic-book-border p-0" role="button" href="/home">
                <img src={placeholder_image} class="prim-sec-img" alt="..."/>
            </div>
        </div>
    );
}

export default PrimarySection;