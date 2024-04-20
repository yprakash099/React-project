import { useEffect, useState } from "react";
import axios from 'axios';
import './CustomerProduct.css';
import { Link, useParams } from "react-router-dom";
 
function ProductsByCategory() {

    const [productsArray, setProductsArray] = useState([]);
    const {id}  =  useParams();


    useEffect(() => {
        getProductsClick();
    }, []);

    function getProductsClick() {
        let url = "http://localhost:3500/products?category=" + id;
        axios.get(url).then((resData) => {
            setProductsArray(resData.data);
        });
    }



    let resultArray = productsArray.map((item, index) =>
        <div className="card">
            <img src={item.Image} height={250} width="250" />
            <br />
            <span className="prdName">{item.productName}</span>  <br />
            <span className="prdPrice"> ₹ {item.price}</span>
            <br />
            <Link to={"/ProductDetails/" +  item.id}>View Details</Link>
        </div>
    );

    return (
        <>
            {resultArray}
        </>
    );
}

export default ProductsByCategory;