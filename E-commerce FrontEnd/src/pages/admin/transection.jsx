
import React, { useState } from 'react'

import AdminSidebar from '../../components/admin/adminSidebar'
import data from "../../assets/data.json"
import { Link } from "react-router-dom"
import "../../Styles/admin/transection.css"


const transection = () => {
    const [transectionData] = useState(data.transaction);

    return (
        <div className="adminContainer">
            <AdminSidebar />
            <main>
                <div className="container">
                    <div className="order-view">
                        <h1 className="text-center">All - transections</h1>
                        <div className="main">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Amount</th>
                                        <th>Quantity</th>
                                        <th>Discount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transectionData && transectionData.map(transection => (
                                        <tr key={transection.id}>
                                            <td>{transection.id}</td>
                                            <td>{transection.amount}</td>
                                            <td>{transection.quantity}</td>
                                            <td>{transection.discount}</td>
                                            <td>{transection.status}</td>
                                            <td>
                                                <Link className="view" to={`/admin/management/managetransections/${transection.id}`}>Manage</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default transection
