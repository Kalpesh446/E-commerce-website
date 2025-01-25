import { Outlet, Route, RouterProvider, ScrollRestoration, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import SpecialCase from "./ui/components/SpecialCase/SpecialCase";
import Header from "./ui/components/home/Header/Header";
import HeaderBottom from "./ui/components/home/Header/HeaderBottom";
import Home from "./ui/pages/Home/Home";
// import { ToastContainer } from "react-toastify";
import Footer from "./ui/components/home/Footer/Footer";
import FooterBottom from "./ui/components/home/Footer/FooterBottom";
import Shop from "./ui/pages/Shop/Shop";
import About from "./ui/pages/About/About";
import Contact from "./ui/pages/Contact/Contact";
import Journal from "./ui/pages/Journal/Journal";
import Offer from "./ui/pages/Offer/Offer";
import ProductDetails from "./ui/pages/ProductDetails/ProductDetails";
import Cart from "./ui/pages/Cart/Cart";
import Payment from "./ui/pages/payment/payment";
import SignUp from "./ui/pages/Account/SignUp";
import SignIn from "./ui/pages/Account/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      {/* footer */}
      <Footer />
      <FooterBottom />
    </div>
  );
};

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/category/:category" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
