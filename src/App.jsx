import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/Top products/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonial from "./components/Testimonials/Testimonial";
import Footer from "./components/Footer/Footer";
import Popup from "./components/popup/Popup";
const App = ()=>{
  const [orderPopup, setOrderPopup] = React.useState(false);
  
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,

  });
    AOS.refresh();
  },[]);
  return(
    <div>
   <Navbar handleOrderPopup={handleOrderPopup} />
   <Hero handleOrderPopup={handleOrderPopup} />
   <Products />
   <TopProducts handleOrderPopup={handleOrderPopup} />
   <Banner />
   <Subscribe />
   <Testimonial />
   <Footer />
   <Popup orderPopup ={orderPopup} setOrderPopup=
   {setOrderPopup} />
  
    </div>
  );
}
export default App;
