import axios from "axios";
import { useEffect, useState } from "react";
import './CustomerProduct.css';
import { Link } from "react-router-dom";

function CustomerProductList()
{
    const [productArray, setProductArray] = useState([]);

    
    

    useEffect(() => 
    {
        getProductsClick();
    }, []);

    function getProductsClick()
    {     
        let url = " http://localhost:3500/products"; 
        axios.get(url).then( (resData) => 
        {
            setProductArray(resData.data);
        });       
    }
    let resultsArray = productArray.map( (item, index) => 
    <div  className="card">
    <img src={item.Image} height="250" width="250" />
    <br/>
    <span className="prdName">{item.productName}</span>  <br/>
    <span className="prdPrice"> ₹ {item.price}</span>
    <br/>
    <Link to={`/ProductDetails/${item.id}`}>View Details</Link>				 
</div>        
    );

    return (
    <>

            {resultsArray}

        
    </>);
}

export default CustomerProductList;