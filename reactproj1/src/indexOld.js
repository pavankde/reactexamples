import  React  from "react"
import  ReactDOM from "react-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

console.log("Welcome Index.js");

//let element=React.createElement("u",null,"My First Example");

let root=document.getElementById("root");

/*ReactDOM.render(
<div>
    <p>{10+20} {"React".concat(" Concat")}</p>
    <p>Welcome Example </p>
    <p>First React Example</p>
</div>,root);*/

let App= () => { 
    return (
    <h1 className="well">My First React Web Component.</h1>
    ) 
}
ReactDOM.render(<App />,root);
