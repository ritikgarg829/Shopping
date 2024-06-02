import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Loader from "./components/loader"
import Header from "./components/header"
import Footer from "./components/footer"
import ProtectedRoute from "./components/protectedRoute"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-Auth/firebaseAuth';
import { userExist, userNotExist } from './redux/reducer/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/api/user-api';

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
const Shipping = lazy(() => import("./pages/shipping"));
const Login = lazy(() => import("./pages/login"));
const Orders = lazy(() => import("./pages/orders"));
const Ordersdetails = lazy(() => import("./pages/orderdetails"));
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Customer = lazy(() => import("./pages/admin/customer"));
const Product = lazy(() => import("./pages/admin/allproduct"));
const NewProduct = lazy(() => import("./pages/admin/management/newProduct"));
const ProductManagement = lazy(() => import("./pages/admin/management/productManagement"));
const TransectionManagement = lazy(() => import("./pages/admin/management/transectionManagement"));
const Transection = lazy(() => import("./pages/admin/transection"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));



const App = () => {

  const { user, loading } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await getUser(user.uid)
        dispatch(userExist(data.user));
      } else {
        dispatch(userNotExist());
      }

    })

  }, [])

  return loading ? <Loader /> : (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />


          {/*---------------------not login routes-----------------------------------------------*/}

          <Route path="/login" element={<ProtectedRoute isAuthenticated={user ? false : true}><Login /> </ProtectedRoute>} />

          {/*---------------------need login for use that routes-----------------------------------------------*/}
          <Route element={<ProtectedRoute isAuthenticated={user ? true : false} />}>
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/ordersdetails/:id" element={<Ordersdetails />} />
          </Route>

          {/*---------------------Admin pannel routes-----------------------------------------------*/}

          <Route element={<ProtectedRoute isAuthenticated={user ? true : false} adminOnly={true} admin={user?.role === "admin" ? true : false} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/customer" element={<Customer />} />
            <Route path="/admin/newproduct" element={<NewProduct />} />
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/management/manageproducts/:id" element={< ProductManagement />} />
            <Route path="/admin/transection" element={<Transection />} />
            <Route path="/admin/management/managetransections/:id" element={< TransectionManagement />} />
            <Route path="/admin/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/coupon" element={<Coupon />} />
            <Route path="/admin/toss" element={<Toss />} />
          </Route>

        </Routes>
        <Footer />
      </Suspense>
      <Toaster position='bottom-center' />
    </Router >
  )
}

export default App
