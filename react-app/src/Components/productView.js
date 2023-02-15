import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class ProductView extends Component {
    constructor(props){
        super(props)
        console.log('props', props.children)
        this.state= {
            sayHi: 'Hi'
        }
    }
    closeModal = () => {
        // debugger;
        this.props.closeModalFun()
    }
    render() {
        console.log('props data', this.props.productViewData)
        const {title, description} = this.props.productViewData;
        return(
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{title} - {this.state.sayHi}</Modal.Title>
                    <button onClick={()=> this.closeModal()} type="button" className="btn-close" aria-label="Close"></button>
                </Modal.Header>

                <Modal.Body>
                    <p>{description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> this.closeModal()}>Close</Button>
                    {/* <Button variant="primary">Save changes</Button> */}
                </Modal.Footer>
            </Modal.Dialog>

        </div>
        )

    }
}


export default ProductView;