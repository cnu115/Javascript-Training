import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Products extends Component {
    state = {
        heading: 'Products',
        data: {}, // this is data object
        isDataLoaded: false
    }

    fetchProudcts = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(results => {
                // console.log(results);
                console.log('updating the products state')
                this.setState({
                    data: results, // updating the state
                    // isDataLoaded: true
                })
            })
    }
    //is invoked immediately after a component is mounted (inserted into the tree)
    componentDidMount = () => {
        console.log('calling componetDidMount')
        this.fetchProudcts();
        //normal function

        // window.setTimeout(function(){
        //     console.log(this.state.heading);
        // }.bind(this),1000);

        //arrow function
        window.setTimeout(() => {
            this.setState({
                heading: "Products List",
                isDataLoaded: true
            })
        }, 10000)
    }

    getCardHtml = () => {
        const products = this.state.data.products;
        console.log('getCardHtml', products)
        if (products && products.length > 0) {
            return products.map((p, index) => {
                const { title, brand, description, images, id } = p;
                return (
                    <Card key={index} style={{ width: '16rem', margin: "12px" }}  >
                        <Card.Img variant="top" src={images[0]} />
                        <Card.Body>
                            {/* <Card.Title>{brand}</Card.Title> */}
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button variant="primary">ADD TO CART</Button>
                        </Card.Body>
                    </Card>
                )
            })
        }
    }
    getHeading = () => {
        return  <h1>{this.state.heading}</h1>
    }

    render() {
        console.log('calling render', this.state)
        return (
            <div className='row'>
                {this.state.isDataLoaded === true ? this.getHeading() : ''}
                {this.getCardHtml()}
            </div>
        )
    }
}

export default Products;