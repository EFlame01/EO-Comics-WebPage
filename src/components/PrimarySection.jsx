import placeholder_image from "../components/images/Welcome Image.jpeg";
import Title from "./Title";

function PrimarySection(props){
    return(
        <div class="col-lg-7 col-sm-12 px-2 my-auto">
            <Title title="News" />
            <a class="btn prim-sec comic-book-border p-0" role="button" href="/home">
                <img src={placeholder_image} class="prim-sec-img" alt="..."/>
            </a>
        </div>
    );
}

export default PrimarySection;