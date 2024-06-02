import React, { useState } from 'react'
import AdminSidebar from '../../components/admin/adminSidebar'
import data from "../../assets/data.json"
import { Link } from "react-router-dom"
import "../../Styles/admin/customer.css"

import { MdDelete } from "react-icons/md";

const customer = () => {
    const [customerData] = useState(data.customer);

    const onhandleDelete = () => {

    }

    return (
        <div className="adminContainer">
            <AdminSidebar />
            <main>
                <div className="container">
                    <div className="order-view">
                        <h1 className="text-center">All - customers</h1>
                        <div className="main">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customerData && customerData.map(customer => (
                                        <tr key={customer.id}>
                                            <td>{customer.img}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.gender}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.role}</td>
                                            <td>
                                                <button className="view" onClick={onhandleDelete}><MdDelete /></button>
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

export default customer
