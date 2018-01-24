import React,{Component} from "react"
import { connect } from "react-redux";
class ProductList extends Component {
    render() {        
        let output=null;
         if (this.props.products.length>0) {
            output = this.props.products.map((products)=> {
                return <tr key={products.id}>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td><button className="btn btn-primary" 
                onClick={()=> this.props.addToCart(products)}>ADD TO CART</button></td>
                </tr>
            })
         }else {
             output=<tr><td colSpan="3">No Data Found!!!</td></tr>
         }

        return <div>
            List Of Products
        <table className="table table-bordered">
            <thead>
                <tr><th>Name</th><th>Price</th><th>action</th></tr>
            </thead>
            <tbody>
                {output}                     
            </tbody>
        </table>
        </div>   
    }
}
function mapStateToProps(state) {
    return {
        products: state.productReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => {
            let orderedItem={id:product.id,name:product.name, price: product.price,qty:1};
            dispatch({type:"ADD_TO_CART", payload:orderedItem});
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);