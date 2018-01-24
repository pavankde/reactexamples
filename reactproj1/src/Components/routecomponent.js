import React,{Component} from "react"
import CartItems from "./shopping/CartItems";
import ProductList from "./shopping/ProductList";
export class NotFound extends Component {
    render=()=> {
        return <h3 className="well">404 Ooops!!! Not Found </h3>
    }
}

export class Home extends Component {
    render=()=> {
        return  <div className="row">
                    <div className="col-sm-6">
                        <ProductList/>
                    </div>
                    <div className="col-sm-6 well">
                        <CartItems/>
                    </div>
                </div>
    }
}