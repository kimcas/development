import React, { Component } from "react"; 

class Cart extends Component {
    // function to alert user of checkout total
    checkoutAlert = item  => {
        alert("Checkout Total: $" + this.props.total)
    }
    
    render() {
        return (
            // shopping cart container
            <div className="cartContainer">
                <h2>Shopping Cart</h2>
                 {this.props.cartList.map(item => 
                    <div key={item.name} className="cartItem">
                        <div className="cartFlex">
                            <img className="cartImage" src={item.image} />
                            <div className="cartInfo">
                                <h3 className="cartName">{item.name}</h3>
                                <p className="productPrice cartPrice">${item.price}</p>
                                <div className="countBar">
                                    <button className="incDecButton" onClick={e => this.props.decrement(e, item)}>-</button>
                                    <p className="quantity">{item.count}</p>
                                    <button className="incDecButton" onClick={e => this.props.increment(e, item)}>+</button>
                                </div>
                                <div className="cartPadding">
                                    <button className="cartButton" onClick={e => this.props.removeItem(item)}>Remove Item</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                 )}
                <div className="checkoutFlex">
                    <h3>Total ${this.props.total}</h3>
                    <button className="checkoutButton" onClick={this.checkoutAlert} variant="outlined">Checkout</button>
                </div>
            </div>
        )
    }
}

export default Cart;
