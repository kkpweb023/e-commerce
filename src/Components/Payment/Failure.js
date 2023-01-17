import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './Success.css';
import Img from '../../Images/fail.JPG';

const Failure = ({ handleClose, show, slip, pay }) => {
    return (
        <div>
            <Modal show={show} animation={false}>
                <Modal.Header closeButton onClick={handleClose}></Modal.Header>

                <Modal.Body>
                    <div className='failure text-center'>
                        <img src={Img} alt="" className='succ_img' />
                    </div>
                    <h3 className='text-center mt-3 text-danger' style={{ marginBottom: "40px" }}>{pay}</h3>

                    <div className='order'>
                        <div className='h5 md-5'>Order number:{slip._id}</div>

                        <div className='fs-5 text-center' style={{ lineHeight: "40px", color: "grey", letterSpacing: "3px", paddingBottom: "40px" }}>

                            Payment failed,please pay again
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Failure;