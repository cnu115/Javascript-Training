import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductView from './productView';
import Loader from './utils/loader';

class Products extends Component {
    constructor(props){
        super(props);
        console.log('calling constructor', props);
        this.state = {
            heading: 'Products',
            data: {}, // this is data object
            isDataLoaded: false,
            isLoader: true,
            isModalShow: false,
            productViewData: {}
        }
    }
    

    fetchProducts = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(results => {
                // console.log(results);
                console.log('updating the products state')
                // window.setTimeout(() => {
                this.setState({
                    data: results, // updating the state
                    // isDataLoaded: true,
                    isLoader: false,
    
                })
            // }, 15000)
            })
    }
    //is invoked immediately after a component is mounted (inserted into the tree)
    componentDidMount = () => {
        console.log('calling componentDidMount')
        this.fetchProducts();
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
    // componentDidMount = () => {
    // console.log('calling componentDidMount')
    //     window.setTimeout(() => {
    //         console.log('updating the state')
    //         this.setState({
    //             heading: "Products List",
    //             isDataLoaded: true
    //         })
    //     }, 10000)
    // }
    componentDidUpdate = () => {
        console.log('calling componentDidUpdate');
    }
    componentWillUnmount = () => {
        console.log('closing the page')
        console.log('calling componentWillUnmount');
    }

    getCardHtml = () => {
        const products = this.state.data.products;
        console.log('getCardHtml', products)
        if (products && products.length > 0) {
            return products.map((p, index) => {
                const { title, brand, description, images, id } = p;
                return (
                    <Card key={index} style={{ width: '16rem', margin: "12px" }} onClick={() => this.productViewInModal(p)} >
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
        return <h1>{this.state.heading}</h1>
    }

    productViewInModal = (data) => {
        console.log('product', data)
        this.setState({
            isModalShow: true,
            productViewData: data
        })
    }
    closeModal = () => {
        this.setState({
            isModalShow: false,
        })
    }
    render() {
        console.log('calling render', this.state)
        return (
            <div className='row'>
                {this.state.isModalShow && <ProductView closeModalFun={this.closeModal} name="bhasker" productViewData={this.state.productViewData}/> }
                {this.state.isLoader === true && <Loader />}
                {(this.state.isDataLoaded === true && this.state.isModalShow ===false )? this.getHeading() : ''}
                {this.state.isModalShow ===false && this.getCardHtml()} 
                {/* product list */}
                
            </div>
        )
    }
}

export default Products;