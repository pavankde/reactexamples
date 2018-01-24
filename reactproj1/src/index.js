import React from "react"
import ReactDOM from "react-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
//import {App} from "./Components/App"
//import App from "./Components/App"
//import MyApp, {App1} from "./Components/App"
import App from "./Components/App"
import { BrowserRouter } from "react-router-dom"
import { createStore,combineReducers } from "redux";
import { Provider } from "react-redux";

let productsData = [{ id: 1, name: "Apple", price: 5000 }, { id: 2, name: "Apple1", price: 5001 },
{ id: 3, name: "Apple3", price: 5003 }, { id: 4, name: "Apple4", price: 5004 }];

let cartData=[];

let productReducer = (state = productsData, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Product Add to cart");
            let p= state.filter(product=> product.id!==action.payload.id);
            return p;
        case "REMOVE_FROM_CART":
            console.log("Product Adding Back.");
            state=[...state,action.payload]
            return state;
        case "ADD_QTY": {
                state.map(items=> {
                    if (items.id===action.payload.id) {
                        items.qty+=1;                    
                    }
                })               
                console.log(state);
            return state;
            }
        default:           
            return state;
    }    
}

let cartReducer = (state = cartData, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Cart Add to cart");
            state=[...state,action.payload]
            return state;
        case "REMOVE_FROM_CART":
            console.log("Removing item from cart");
            let p= state.filter(items=> items.id!==action.payload.id);
            return p;
        case "ADD_QTY": {
            state.map(items=> {
                if (items.id===action.payload.id) {
                    items.qty+=1;                    
                }
            })               
            console.log(state);
        return state;
        }
        default:            
        return state;
    }
}
var appStore = createStore(combineReducers({productReducer,cartReducer}));

ReactDOM.render(<Provider store={appStore}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById("root"))