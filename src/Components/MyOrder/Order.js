import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './Order.css';

let port = `https://graceful-gray-indri.cyclic.app` || `http://localhost:4000`;

const Order = () => {

    const [orderTable, setOrderTable] = useState([]);


    function getPaymentSlip() {
        axios.get(`${port}/paymentlist`)
            .then((result) => {
                setOrderTable(result.data)
            })
            .catch((error) => console.log("! 404 data not found"));
    }


    function handleDelete(id) {

        axios.delete(`${port}/paymentlistDelete/${id}`)
            .then((result) => {
                if (result.data.deletedCount === 1) {
                    alert("delete successfully");
                    getPaymentSlip();
                } else {
                    alert("delete failed")
                }

            })
            .catch((errors) => console.log("! 404 failed"));
    }

    useEffect(()=>{
        getPaymentSlip();
    },[])




    return (
        <>

            <div className='container order_div'>
                <h1>ORDERS</h1>
                <Table striped bordered hover className='table'>
                    <thead className="table-dark">
                        <tr>
                            <th>S.NO.</th>
                            <th>ORDER ID</th>
                            <th>DATE</th>
                            <th>ITEMS</th>
                            <th>AMOUNTS</th>
                            <th>STATUS</th>
                            <th>VIEW</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderTable.length > 0 ?
                                orderTable.map((value, index) =>

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value._id}</td>
                                        <td>{value.date}</td>
                                        <td>{value.item}</td>
                                        <td>Rs. {value.total}</td>
                                        <td>{value.status}</td>
                                        <td><button type="button" className="btn btn-success shadow-none" style={{ fontSize: "10px" }}>View</button></td>

                                        <td><button type="button"
                                            className="btn btn-danger shadow-none"
                                            style={{ fontSize: "10px" }}
                                            onClick={() => handleDelete(value._id)}

                                        >Delete</button></td>
                                    </tr>
                                )
                                :
                                <tr>
                                    <td style={{ border: "none", fontSize: "40px", color: "blue", fontWeight: "bold" }} colSpan={'8'}>No Order Item Found</td>
                                </tr>
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Order;