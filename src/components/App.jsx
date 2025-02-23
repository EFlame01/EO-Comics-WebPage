import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Launch from "../pages/Launch";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <Launch />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;