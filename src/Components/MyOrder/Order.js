import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './Order.css';

const Order = () => {



    const [orderTable, setOrderTable] = useState([]);

  

    function getPaymentSlip() {
        axios.get('http://localhost:4000/paymentlist')
            .then((result) => {
                setOrderTable(result.data)
            })
            .catch((error) => console.log("! 404 data not found"));
    }
    useEffect(() => {
        getPaymentSlip()
    },[])




    return (
        <>
        
        <div  className='container order_div'>
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
                    </tr>
                </thead>
                <tbody>
                { 
                  
                  orderTable.map((value,index)=>

                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value._id}</td>
                        <td>{value.date}</td>
                        <td>{value.item}</td>
                        <td>Rs. {value.total}</td>
                        <td>{value.status}</td>
                        <td>View</td>
                    </tr>

                )}   
                </tbody>
            </Table>
        </div>
        </>
    )
}

export default Order;