import React,{Component} from "react"
import { connect } from "react-redux";
class CartItems extends Component {
    totalAmount=()=> {
        let tot=0;
        for (let e of this.props.items) {
            tot+= (e.price* e.qty);
        }
        return tot;
    }
    render() {
        let output=null;        
         if (this.props.items.length>0) {
            output = this.props.items.map((item)=> {
                return <tr key={item.id}>                
                <td><button className="btn btn-danger btn-xs"
                 onClick={()=> this.props.removeFromCart(item)}>X</button>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.qty}<button className="btn btn-danger btn-xs"
                 onClick={()=> this.props.addQty(item)}>+</button></td>
                <td>{item.price * item.qty}</td>
                </tr>
            })
         }else {
             output=<tr><td colSpan="4">Cart is Empty!!!</td></tr>
         }
        return <div>Cart Items are <span className="label label-primary">{this.props.items.length}</span>
            <table className="table table-bordered">
            <thead>
                <tr><th>Name</th><th>Price</th><th>Quantity</th><th>Amount</th></tr>
            </thead>
            <tbody>
            {output}   
            <tr>
                <td colSpan="3">Total Amount : </td>
                <td>{this.totalAmount()}</td>
            </tr>
            </tbody>
            
        </table>
        </div>   
    }
}

function mapStateToProps(state) {
    return {
        items: state.cartReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (item) => {
            let orderedProduct={id:item.id,name:item.name, price: item.price};
            dispatch({type:"REMOVE_FROM_CART", payload:orderedProduct});
        },
        addQty: (item) => {
            let orderedProduct1={id:item.id,name:item.name, price: item.price,qty: item.qty};
            console.log("==="+orderedProduct1);
            dispatch({type:"ADD_QTY", payload:orderedProduct1});
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartItems);