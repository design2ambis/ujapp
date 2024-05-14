import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Landing from "./pages/landing";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Forgotpassword from "./pages/forgotpassword";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Singleproduct from "./pages/singleproduct";
import Changepassword from "./pages/changepassword";
import Myprofile from "./pages/myprofile";
import Myorder from "./pages/myorder";
import Orderdetail from "./pages/orderdetail";
import Orderconfirm from "./pages/orderconfirm";
import Shop from "./pages/shop";





const App = () => {
  return (
    <BrowserRouter basename="/">
      {/* <Header /> */}

      <Routes>
               
        <Route path="/" element={<Index />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop/:cat/:subcat" element={<Shop />} />
        <Route path="/product/:prono" element={<Singleproduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/myorder" element={<Myorder />} />
        <Route path="/orderdetail/:orderno" element={<Orderdetail />} />        
        <Route path="/orderconfirm" element={<Orderconfirm />} />            
        

        {/* <Route path="*" element={<Notfound404 />} /> Fallback route for 404 */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
