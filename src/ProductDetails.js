import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails(props) {

    const [qty, setQty] = useState(1);
    let dataObj = {
		"id" :  "",
		"productName" :  "",
		"category" : "",
		"detail" :  "",
		"price"  :  "",
		"Image" :  ""
};


    const [productObj, setProductObj] = useState(dataObj);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getSelectedProductDetails();
    }, []);

    function getSelectedProductDetails() {
        let url = " http://localhost:3500/products/" + id;
        axios.get(url).then((resData) => {
            setProductObj(resData.data);
        });
    }


    function  addToCartButtonClick()
    {
        let userId = sessionStorage.getItem("USER_ID");
        if(userId == null || userId == undefined)
        {
            alert("Please Login before adding items to Cart");
            navigate("/Login");
            return;
        }

        let cartObj = {};
      
        cartObj.productName		= 	productObj.productName;			
        cartObj.price = productObj.price;
        cartObj.quantity  =  qty;
        cartObj.total       =   productObj.price * qty;			  			 
        cartObj.userId   =   sessionStorage.getItem("USER_ID");

        let url = "http://localhost:3500/cart";
        axios.post(url,  cartObj).then((resData)=>
        {
            navigate("/ShoppingCart");
        });
       
    }

    return (
        <div>
            <h2 style={{textAlign:"center"}}>Product Details</h2>
            <hr />

            <div className='detailsCard'>
                <img src={productObj.Image} height={400} width="400" />
                <br />
                <span className="prdName">{productObj.productName}</span>  <br />
                 <span>Quantity :   &nbsp;&nbsp;
                    <button onClick={() => setQty(qty+1)}>+</button> 
                    &nbsp;&nbsp;  
                    {qty} 
                    &nbsp;&nbsp;
                    <button onClick={() => { if(qty>1) setQty(qty-1)}}>-</button> 
                </span> <br/>
                <span> Price :  ₹ { productObj.price}</span>
                <br />
                <span> Product Description :    { productObj.detail}</span>
                <br />
                <button  className='btn btn-primary' onClick={addToCartButtonClick}>Add To Cart</button>
            </div>
            <div style={{textAlign:"center"}}>
                &nbsp;
           <Link to="/AllProducts" className='btn btn-primary'>Back to Products</Link>
            </div>
        </div>
    );

}

export default ProductDetails;