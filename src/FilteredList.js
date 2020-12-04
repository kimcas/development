import React, { Component } from "react";
import './index.css';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

import DisplayList from "./DisplayList.js"

class FilteredList extends Component {
    constructor(props){
        super(props);
        this.state = {
		    type: "All",
            metal: "All",
            sort: "Featured"
	    }
    }
    // function for when the user selects a type of product -- updates state
    onSelectFilterType = (event) =>  {
        this.setState({
		type: event
	    })

    }
    // function for when the user selects a type of metal -- updates state
    onSelectFilterMetal = (event) =>  {
        this.setState({
		metal: event
	    })

    }
    // function that filters out products depending on user selection of type of product
    matchesFilterType = item => {
        if(this.state.type === "All") { 
            return true
        } else if (this.state.type === item.type) {
            return true
        } else {
            return false
	    }
    }
    // function that filters out products depending on user selection of type of metal
    matchesFilterMetal = item => {
        if(this.state.metal === "All") { 
            return true
        } else if (this.state.metal === item.metal) {
            return true
        } else {
            return false
	    }
    }
    // function that sorts products from low to high
    sortLowToHigh= () => {
        this.props.list.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        console.log(this.props.list)
        console.log("hi")
    }
    // function that sorts products from high to low
    sortHighToLow = () => {
        this.props.list.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        console.log("hello")
        console.log(this.props.list)
    }
    // function that sorts products by price using sortLowToHigh and sortHighToLow
    sortByPrice = (event) => {
        this.setState({
            sort: event
        });
        if(event === "lowToHigh") {
            this.props.list.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            NavDropdown.title = event
        } else {
            this.props.list.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        }
    }

    render() {
        return (
            <div>
                {/* navbar for type of product */}
                <Navbar className="navbars">
                    <Navbar.Brand>Type: </Navbar.Brand>
                    <Nav defaultActiveKey="Size">
                        <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterType}>All</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="earrings" onSelect={this.onSelectFilterType}>Earrings</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="rings" onSelect={this.onSelectFilterType}>Rings</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="necklaces" onSelect={this.onSelectFilterType}>Necklaces</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar>
                {/* navbar for metal type */}
                <Navbar className="navbars">
                    <Navbar.Brand>Metal: </Navbar.Brand>
                    <Nav defaultActiveKey="Size">
                        <Nav.Item><Nav.Link eventKey="All" onSelect={this.onSelectFilterMetal}>All</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="silver" onSelect={this.onSelectFilterMetal}>Silver</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="gold" onSelect={this.onSelectFilterMetal}>Gold</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar>
                {/* navbar for sorting by price */}
                <Navbar className="navbars">
                    <Navbar.Brand>Sort By Price:</Navbar.Brand>
                    <Nav defaultActiveKey="Size">
                    <NavDropdown title="Featured">
                        <NavDropdown.Item eventKey="lowToHigh" onSelect={this.sortByPrice} >$ Low to $$$ High</NavDropdown.Item>
                        <NavDropdown.Item eventKey="highToLow" onSelect={this.sortByPrice} >$$$ High to $ Low</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar>
                {/* call display list to display products based on user selection */}
                <DisplayList list={this.props.list.filter(this.matchesFilterType).filter(this.matchesFilterMetal)}/>
            </div>
        )
    }
}

export default FilteredList;

