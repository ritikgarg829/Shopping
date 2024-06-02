import React from 'react'
import { Link } from "react-router-dom"
import "../../Styles/admin/table.css"


const table = ({ orders }) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Discount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>₹{order.amount}</td>
                            <td>{order.quantity}</td>
                            <td>₹{order.discount}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}




export default table
