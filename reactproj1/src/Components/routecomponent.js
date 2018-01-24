import React,{Component} from "react"
import CartItems from "./shopping/CartItems";
import ProductList from "./shopping/ProductList";
import axios from "axios";
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

export class ManageProducts extends Component {
    constructor()
    {
        super();
        this.apiUrl="http://localhost:4000/wsproducts";
    }
    state={data:[]}

    componentDidMount() {
        axios.get(this.apiUrl).then((resp)=> {                        
            this.setState({data: resp.data})
        },(err) => {
            console.log("error")
        })

    }

    addProduct=() => {
        let product= {"id":null, "name": this.refs.name.value, 
        "price":this.refs.price.value}

        axios.post(this.apiUrl,product).then((resp)=>{
            console.log("Add Success");
            this.state.data.push(resp.data)
            this.setState({data: this.state.data})
            this.refs.name.value=null;
            this.refs.price.value=null;
        }),(err) => {
            console.log(err);
        }
    }
    deleteProduct=(id) => {
        axios.delete(this.apiUrl+"/"+id).then((resp)=> {
            console.log("Delete Success");
            let idx=this.state.data.findIndex((e) => e.id === id);
            this.state.data.splice(idx,1);
            this.setState({data: this.state.data})            
        },(err) => {
            console.log("Delete Error");
        })
    }
    editProduct=(product) => {
        this.refs.pid.value=product.id;
        this.refs.name.value=product.name;
        this.refs.price.value=product.price;
    }
    updateProduct=() => {
        let product= {"id":this.refs.pid.value, "name": this.refs.name.value, 
        "price":this.refs.price.value}

        axios.put(this.apiUrl+"/"+product.id,product).then((resp)=>{
            console.log("update Success");
            
           
        }),(err) => {
            console.log(err);
        }
    }

    render=()=> {
        let output=null;
        if (this.state.data.length>0) {
            output=this.state.data.map((product)=> {               
                    return <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><button type="button" className="btn btn-danger" 
                    onClick={()=> this.deleteProduct(product.id)}>Remove</button>
                    <button type="button" className="btn btn-success" 
                    onClick={()=> this.editProduct(product)}>Edit</button>
                    </td>
                    </tr>
                })            
        }
        return <div>
            <h3>Manage Products</h3>
            
            <form className="well">
                <input type="text" ref="pid" readOnly/>
                <input type="text" ref="name" placeholder="Enter product Name"/>
                <input type="text" ref="price" placeholder="Enter product price"/>
                <button type="button" className="btn btn-primary" 
                onClick={this.addProduct}>Add</button>
                <button type="button" className="btn btn-primary" 
                onClick={this.updateProduct}>Update</button>
            </form>

            <table className="table table-bordered">
            <thead>
                <tr><th>ID</th><th>Name</th><th>Price</th><th>Action</th></tr>
            </thead>
            <tbody>
                {output}                     
            </tbody>
        </table>
        </div>
    }
}
