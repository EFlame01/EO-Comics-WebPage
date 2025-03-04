import SubTitle from "./SubTitle";

function ComicButton(props){
    return(
        <div class="pt-2">
            <div class="container comic-book-border btn btn-comic-border position-relative p-0 m-auto p-0">
                <img class="img-fluid" src={props.img_banner} alt=".." />
                <div class="comic-book-border bg-white position-absolute bottom-0 end-0 py-1 px-2 m-2">
                    <SubTitle title={props.comic_name} />
                </div>
            </div>
            <div class="py-2" />
        </div>
    );
} export default ComicButton;