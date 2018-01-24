import React from "react"
import ReactDOM from "react-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
//import {App} from "./Components/App"
//import App from "./Components/App"
//import MyApp, {App1} from "./Components/App"
import App from "./Components/App"
import { BrowserRouter } from "react-router-dom"
ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById("root"))