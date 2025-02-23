import "./css/HomeContent.css"
import PrimarySection from "./PrimarySection";
import SecondarySection from "./SecondarySection";;

function HomeContent(props){
    return (
        <div class="py-2">
            <div class="container-lg row mx-auto">
                <PrimarySection />
                <div class="col-lg-1 col-sm-12" />
                <SecondarySection />
            </div>
        </div>
    );
}

export default HomeContent;