import React from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import {Route} from "react-router-dom"
import {Link} from "react-router-dom"
import { NotFound, Home } from "./routecomponent";
import Switch from "react-router-dom/Switch";
class App extends React.Component {
    render() {
        return <div> 
            <nav className="navbar navbar-inverse">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to="/"  className="navbar-brand">Home</Link></li>
                        <li><Link to="/SignIn"  className="navbar-brand">SignIn</Link></li>
                        <li><Link to="/SignUp"  className="navbar-brand">SignUp</Link></li>
                    </ul>
                </div>
            </nav>
            <Switch>            
            {/* <Route path="/" exact render={()=><h3> Home Page</h3>} />  */}
            <Route path="/" exact component={Home} /> 
            <Route path="/SignIn" component={SignIn} /> 
            <Route path="/SignUp" component={SignUp} /> 
            <Route path="*" component={NotFound}  /> 
            </Switch>
        </div>
    }
}

/*export class App1 extends React.Component {
    render() {
        return <h1> My First Component. </h1>
    }
}*/

export default App
