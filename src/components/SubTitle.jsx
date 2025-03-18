import "./css/Title.css"

function SubTitle(props){
    return (
        <div className="text-center container-sm">
            <h2 class="subtitle">{props.title}</h2>
        </div>
    );
}

export default SubTitle;