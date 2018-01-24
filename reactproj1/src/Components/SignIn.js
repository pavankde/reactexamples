import React,{Component} from "react"
import MySign from "./common/MySign"
class SignIn extends Component {
    state= {loggedUserName: "Guest"}
    handleSignIn= (uname) => {
        console.log("received name",uname);
        this.setState({loggedUserName: uname})
    } 
    render() {
        return <div> 
            <p>Loggedin User is {this.state.loggedUserName}</p>
            <MySign heading="SignIn" onSignInClick={this.handleSignIn}/>
        </div>
    }
}

/*export class App1 extends React.Component {
    render() {
        return <h1> My First Component. </h1>
    }
}*/

export default SignIn
