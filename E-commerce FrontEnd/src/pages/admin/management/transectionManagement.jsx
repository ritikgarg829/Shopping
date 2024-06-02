import { useState } from "react";
import AdminSidebar from "../../../components/admin/adminSidebar";
import { Link } from "react-router-dom";
import "../../../Styles/admin/management/transectionManagement.css"

const img =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems = [
    {
        name: "Puma Shoes",
        photo: img,
        _id: "asdsaasdas",
        quantity: 4,
        price: 2000,
    },
];

const TransactionManagement = () => {
    const [order, setOrder] = useState({
        name: "Ritik garg",
        address: "77 Black Street",
        city: "Neyword",
        state: "Nevada",
        country: "India",
        pinCode: 2434341,
        status: "Processing",
        subtotal: 4000,
        discount: 1200,
        shippingCharges: 0,
        tax: 200,
        total: 4000 + 200 + 0 - 1200,
        orderItems,
        _id: "asdnasjdhbn",
    });

    const {
        name,
        address,
        city,
        country,
        state,
        pinCode,
        subtotal,
        shippingCharges,
        tax,
        discount,
        total,
        status,
    } = order;

    const updateHander = () => {
        setOrder((prev) => ({
            ...prev,
            status: prev.status === "Processing" ? "Shipped" : "Delivered",
        }));
    };

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="product-management">
                <section
                    style={{
                        padding: "2rem",
                    }}
                >
                    <h2 className="text-center">Order Items</h2>

                    {order.orderItems.map((i) => (
                        <ProductCard
                            name={i.name}
                            photo={i.photo}
                            _id={i._id}
                            quantity={i.quantity}
                            price={i.price}
                        />
                    ))}
                </section>

                <article className="shipping-info-card">
                    <h1 className="text-center">Order Info</h1>
                    <h5>User Info</h5>
                    <p>Name: {name}</p>
                    <p>
                        Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
                    </p>

                    <h5>Amount Info</h5>
                    <p>Subtotal: {subtotal}</p>
                    <p>Shipping Charges: {shippingCharges}</p>
                    <p>Tax: {tax}</p>
                    <p>Discount: {discount}</p>
                    <p>Total: {total}</p>

                    <h5>Status Info</h5>
                    <p>
                        Status:{" "}
                        <span
                            className={
                                status === "Delivered"
                                    ? "text-purple-500"
                                    : status === "Shipped"
                                        ? "text-green-500"
                                        : "text-red-500"
                            }
                        >
                            {status}
                        </span>
                    </p>

                    <button className="update" onClick={updateHander}>Process Status</button>
                </article>
            </main>
        </div>
    );
};

const ProductCard = ({ name, photo, price, quantity, _id }) => (
    <div className="transaction-product-card">
        <img src={photo} alt={name} />
        <Link to={`/product/${_id}`}>{name}</Link>
        <span>
            ${price} X {quantity} = ${price * quantity}
        </span>
    </div>
);

export default TransactionManagement;
