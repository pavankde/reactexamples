import React,{Component} from "react"
class CartItems extends Component {
    render() {
        return <div>List of Cart Items
            <table className="table table-bordered">
            <thead>
                <tr><th>Name</th><th>Price</th><th>Quantity</th><th>Amount</th></tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        </div>   
    }
}
export default CartItems;