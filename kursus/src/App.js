import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/global/HomePage";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import MaintainShops from "./pages/admin/MaintainShops";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import AdminHome from "./pages/admin/AdminHome";
import Shops from "./pages/global/Shops";
import SingleProduct from "./pages/global/SingleProduct";
import ContactUs from "./pages/global/ContactUs";
import Cart from "./pages/global/Cart";
import NotFound from "./pages/global/NotFound";
import Navigationbar from "./components/Navigationbar";
import {ToastContainer} from "react-toastify";
import React, { useContext } from "react";
import Supplier from './pages/admin/Supplier';
import PaymentCheck from './pages/global/PaymentCheck';
import Native from './pages/global/Native';
import Motion from './pages/global/Motion';
import Profile from './pages/auth/Profile';
import { AuthContext } from './store/AuthContext';

function App() {
    const {loggedIn} = useContext(AuthContext);

    return (
        <div className="App">
            {<Navigationbar/>}

            <Routes>
                <Route path="/" element={
                    <HomePage/>
                }/>
                <Route path="/cart" element={
                    <Cart/>
                }/>
                <Route path="/shops" element={
                    <Shops/>
                }/>
                <Route path="/product/:productId" element={
                    <SingleProduct/>
                }/>
                <Route path="/contact" element={
                    <ContactUs/>
                }/>

                { loggedIn ? <>
                    <Route path="/admin" element={
                        <AdminHome/>
                    }/>
                    <Route path="/admin/add-product" element={
                        <AddProduct/>
                    }/>
                    <Route path="/admin/edit-product/:index" element={
                        <EditProduct/>
                    }/>
                    <Route path="/admin/maintain-products" element={
                        <MaintainProducts/>
                    }/>
                    <Route path="/admin/maintain-shops" element={
                        <MaintainShops/>
                    }/>
                    <Route path="/admin/maintain-categories" element={
                        <MaintainCategories/>
                    }/>
                    <Route path="/admin/supplier" element={
                        <Supplier/>
                    }/>
                    <Route path="/profile" element={
                        <Profile/>
                    }/>
                </> : 
                <>
                    <Route path="/profile" element={<Navigate to="/login"/>}/>
                    <Route path="/admin/*" element={<Navigate to="/login"/>}/>
                </>
                }


                <Route path="/login" element={
                    <Login/>
                }/>
                <Route path="/signup" element={
                    <Signup/>
                }/>

                <Route path="/payment" element={
                    <PaymentCheck/>
                }/>

                <Route path="/native" element={
                    <Native/>
                }/>
                
                <Route path="/motion" element={
                    <Motion/>
                }/>


                <Route path="*" element={
                    <NotFound/>
                }/>


            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                theme="dark"
            />
        </div>
    );
}

export default App;


// Modal eraldi komponendiks -> useImperativeRef +++
// Kogus ostukorvis --> tekitan objekti ümber {quantity: 2, product: Product} +++
// Makse: EveryPay kaudu (tagasi kaupmehe juurde) +++
// Ostukorvis saan võtta kõik tooted andmebaasist
// E-maili saatmine
// Context -> Globaalne muutuja
// Autentimine -> URLde peitmine
// Redux
// TypeScript
// React Native / Ionic

// N 31.10
// R 1.11
// P 3.11 Autentimine
// T 5.11 

// 12. N xxx 14.11 13.00-16.15   Redux
// 13. T 19.11 13.00-16.15 TypeScript
// 14. R 22.11 13.00-16.15 TypeScript
// 15. T 26.11 13.00-16.15 Kujundus/MUI -> module, Redux
// 16. R 29.11 13.00-16.15 Redux
// 17. T 03.12 13.00-16.15 UX/UI disainer
//xxx K 04.12 13.00-14.30 ---> tegelikult seda ei toimu, aga läheb allkirjalehele
// 18. T 17.12 13.00-14.30 ---> lõpuprojekti esitlus, allkirjalehele ei lähe
