import React from 'react'
import "../Styles/orders.css"
import { Link } from "react-router-dom"

const orders = () => {

    const orders = [
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },
        { id: "ded", amount: 100, quantity: 2, discount: 10, status: <span className="text-red-600">Processing</span>, action: <Link to={'/order/ded'}>View</Link> },

    ];
    return (
        <div className="container">
            <h1>My Orders</h1>
            <div className="order-view">
                <h1 className="text-center">Orders</h1>
                <div className="main">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Amount</th>
                                <th>Quantity</th>
                                <th>Discount</th>
                                <th>Status</th>
                                <th>Action</th>
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
                                    <td>
                                        <Link className="view" to={'/ordersdetails/ded'}>View</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default orders
