import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Launch from "../pages/Launch";
import Home from "../pages/Home";
import Comics from "../pages/Comics";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function App(){
    return (
        <Router>
            <Switch>
                 <Route exact path="/">
                    <Launch />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/comics">
                    <Comics />
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