import Footer from "../components/Footer";
import SignUpBar from "../components/SignUpBar";
import Logo from "../components/Logo";
import Title from "../components/Title";
import SignUpBox from "../components/SignUpBox";

function SignUp(){
    return (
        <div>
            <SignUpBar />
            <Logo />
            <Title title="Sign Up"/>
            <SignUpBox />
            <Footer />
        </div>
    )
}

export default SignUp;