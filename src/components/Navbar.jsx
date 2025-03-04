
function Navbar(props){
    return (
        <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">
                <button class="navbar-toggler ms-2 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse comic-book-border bg-blue" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link color-white ms-2" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color-white ms-2" href="/comics">Comics</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color-white ms-2" href="/games">Games</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color-white ms-2" href="/shows">Shows</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color-white ms-2" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link color-white ms-2" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;