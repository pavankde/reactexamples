import React,{Component} from "react"
export default class MySign extends Component {
    constructor() {
        super(); 
        console.log("Constructor");        
    }
    componentWillMount() {        
        console.log("componentWillMount");
        console.log("Heading",this.props.heading);        
    }
    componentDidMount() {        
        console.log("componentDidMount");
        //document.querySelector("h3").style.color='red';
    }
    componentWillUnmount() {        
        console.log("componentWillUnmount");
    }
sendData =() => {
    //console.log("Sending Data....."+this.refs.userId.value);
    this.props.onSignInClick(this.refs.userId.value);
}

    render() {
        console.log("Render");
        //this.props.heading="WellsFargo"
        return <div> 
            <h3>{this.props.heading}</h3>
            <form>
                <input type="text" placeholder="Enter UserName" ref="userId"/>&nbsp;
                <input type="password" placeholder="Enter password" ref="password"/>&nbsp;
                <button type="button" className="btn btn-primary" onClick={this.sendData}>{this.props.heading}</button>
            </form>
        </div>
    }
}