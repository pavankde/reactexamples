import React,{Component} from "react"
class ProductList extends Component {
    render() {
        return <div>
            List Of Products
        <table className="table table-bordered">
            <thead>
                <tr><th>Name</th><th>Price</th><th>action</th></tr>
            </thead>
            <tbody>

            </tbody>
        </table>
        </div>   
    }
}
export default ProductList;