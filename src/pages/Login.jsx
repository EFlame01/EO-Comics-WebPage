import Footer from "../components/Footer";
import SignUpBar from "../components/SignUpBar";
import LoginBox from "../components/LoginBox";
import Logo from "../components/Logo";
import Title from "../components/Title";

function Login(){
    return (
        <div>
            <SignUpBar />
            <Logo />
            <Title title="Login" />
            <LoginBox />
            <Footer />
        </div>
    );
}

export default Login;