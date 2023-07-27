import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar/NavBar.js';
import ShopDetails from './ShopDetails/ShopDetails.js';
import ProductDetails from './ProductDetails/ProductDetails.js';
import TimeDetails from './TimeDetails/TimeDetails.js';
import MemberDetails from './MemberDetails/MemberDetails.js';
import FruitDetails from './FruitDetails/FruitDetails.js';
import ShopBannerDetails from './ShopBannerDetails/ShopBannerDetails.js';
import FruitsNewsDetails from './FruitsNewsDetails/FruitsNewsDetails.js';
import FruitsList from './FruitsList/FruitsList.js';
import Footer from './Footer/Footer.js';
import FooterCopy from './FooterCopy/FooterCopy.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <NavBar />
    <ShopDetails />
    <ProductDetails />
    <TimeDetails />
    <MemberDetails />
    <FruitDetails />
    <ShopBannerDetails />
    <FruitsNewsDetails />
    <FruitsList />
    <Footer />
    <FooterCopy />
  </>
  

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
