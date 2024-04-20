import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminProductList from './AdminProductList';
import CustomerProductList from './CustomerProductList';
import NotFound from './NotFound';
import Login from './Login';
import NavBar from './NavBar';
import ProductsByCategory from './ProductsByCategory';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './ProductDetails';

const routing = (
  <Router>

      <NavBar/><br/><br/>
      <hr/>
     
      <div style={{marginTop: "22px",backgroundColor: 'lightblue',textAlign : "center"}  }>
    <h3><img src="./images/logo2.png" width="110" height="110" />&nbsp;&nbsp;Apple Products Website</h3>
    </div>
    


    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Admin" element={<AdminProductList/>} />     
      <Route path="/AllProducts" element={<CustomerProductList/>} />  
      <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
      <Route path="/ProductByCategory/:id" element={<ProductsByCategory/>}/>
      <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
      <Route path="/Login" element={<Login/>}  />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </Router>

);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
