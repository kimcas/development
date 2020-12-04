import React, { Component } from "react"; 
import Cart from "./Cart.js"

class DisplayList extends Component {
    constructor(props){
        super(props);
        this.state = {
            total: 0.00,
            aggregatedList: []
        }
    }
    // updates total when product is added to cart
    updateTotalAdd = item => {
        this.state.total = (parseFloat(this.state.total) + parseFloat(item.price)).toFixed(2)
    }
    // corrects total and removes item from shopping cart -- aggregated list is a list 
    // of prodcuts in shopping cart
    removeItem = (item) => {
        this.state.total = (parseFloat(this.state.total) - parseFloat(item.price*item.count)).toFixed(2)
        this.setState({
            aggregatedList: this.state.aggregatedList.filter(product => product.name !== item.name)
        })
        item.count = 0
        
    }
    // called when user clicks "add to cart" 
    // checks if item is already in cart. If it is, increments the count and updates total
    // if not, adds item to aggregated list, updates total, and displays in shopping cart
    addToCart = (event, item) => {
        event.preventDefault();
        if(this.state.aggregatedList.filter(product => product.name === item.name).length !== 0) {
            item.count = item.count + 1
            this.setState({
                total: (parseFloat(this.state.total) + parseFloat(item.price)).toFixed(2)
            })
        } else {
            item.count = item.count + 1
            this.setState({
                aggregatedList: [...this.state.aggregatedList, item]
            })
        }
        this.updateTotalAdd(item)
    }
    // increments product count in shopping cart and updates total
    incrementCount = (event, item) => {
        item.count = item.count + 1
        this.setState({
            total: (parseFloat(this.state.total) + parseFloat(item.price)).toFixed(2)
        })
    }
    // decrements product count in shopping cart and updates total 
    // if only one item, removes item from cart
    decrementCount = (event, item) => {
        if(item.count === 1) {
            this.removeItem(item)
        } else {
            item.count = item.count - 1
            this.setState({
                total: this.state.total = (parseFloat(this.state.total) - parseFloat(item.price)).toFixed(2)
            })
        }
    }
    render() {
        return (
            // list of selected items 
            <div className="mainFlex">
            <div className="productGrid">
                {this.props.list.map(item => 
                <div key={item.name} className="item">
                    <img className="productImage" src={item.image} />
                    <div className="productInfo">
                        <div className="productFlex">
                            <h3 className="productName">{item.name}</h3>
                            <p className="productPrice">${item.price}</p>
                        </div>
                        <p className="productType">{item.type}</p>
                        <p className="productMetal">{item.metal}</p> 
                    </div>
                    <div className="buttonPadding">
                        <button className="button" variant="outlined" onClick={e => this.addToCart(e, item)}>Add to Cart</button>
                    </div>
                </div>)}
            </div>
            {/* shopping cart display */}
            <Cart total={this.state.total} cartList={this.state.aggregatedList} removeItem={this.removeItem} increment={this.incrementCount} decrement={this.decrementCount} className="shoppingCart"/> 
            </div>
        )
    }
}

export default DisplayList;
