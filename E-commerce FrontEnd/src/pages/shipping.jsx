import React, { useState, useEffect } from 'react';
import { BiArrowBack } from "react-icons/bi";
import "../Styles/shipping.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const shipping = () => {
    const navigate = useNavigate();

    const { cartItems } = useSelector((state) => state.cartReducer);

    const [ShippingInfo, setShippingInfo] = useState({
        address: "",
        state: "",
        city: "",
        countary: "",
        pincode: ""
    });

    const changeHandler = (e) => {
        setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        if (cartItems.length <= 0) {
            navigate('/cart');
        }
    }, [cartItems]);

    return (
        <div className="shipping">
            <button className="back-btn" onClick={() => { navigate("/cart"); }}><BiArrowBack /></button>
            <form>
                <h1>Shipping Address</h1>
                <input type="text" placeholder='Address' name="address" required
                    value={ShippingInfo.address}
                    onChange={changeHandler} />

                <input type="text" placeholder='State' name="state" required
                    value={ShippingInfo.state}
                    onChange={changeHandler} />

                <input type="text" placeholder='City' name="city" required
                    value={ShippingInfo.city}
                    onChange={changeHandler} />

                <select name="countary" required value={ShippingInfo.countary}
                    onChange={changeHandler}>
                    <option value="" >Select Countary</option>
                    <option value="India" >India</option>
                </select>

                <input type="text" placeholder='Pincode' name="pincode" required
                    value={ShippingInfo.pincode}
                    onChange={changeHandler} />
                <button className="paynow">Pay Now</button>
            </form>

        </div>
    )
};

export default shipping;