import InputField from "../components/InputField";
import { Link } from "react-router-dom";
import welcome_image from "../components/images/Welcome Image.jpeg";

function SignUpBox(){
    return (
        <div className="container comic-book-border bg-blue mb-4">
            <div className="row my-2">
                <div className="col-lg-6 col-md-12 pb-2">
                    <div className="m-3">
                        <h4 className="text-center">Sign Up Information</h4>
                    </div>
                    <div className="text-center">
                        <div className="row">
                            <div className="col-6">
                                <InputField class="form-outline" type="text" placeholder="First Name" />
                            </div>
                            <div className="col-6">
                                <InputField class="form-outline" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <InputField class="form-outline" type="email" placeholder="E-mail" />
                        <InputField class="form-outline" type="text" placeholder="Username" />
                        <InputField class="form-outline" type="password" placeholder="Password" />
                        <InputField class="form-outline" type="password" placeholder="Confirm Password" />
                        <InputField class="form-outline" type="date" />
                        <div class="form-check inline-block">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                I agree to the <Link to="/">terms and conditions.</Link>
                            </label>
                        </div>
                        <div className="mt-2">
                            <button class="btn btn-red">Sign Up</button>
                        </div>
                        <div className="mt-2">
                            <p>Already a member? <Link to="/login">Login.</Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 pb-2 d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid comic-book-border" src={welcome_image} alt="EO Comics" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpBox;