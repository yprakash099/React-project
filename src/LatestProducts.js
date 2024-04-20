import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './CustomerProduct.css';

function LatestProducts()
{
    const[Latestproduct,setLatestProduct] = useState([]);

    useEffect(()=>
    {
        getProductDataClick();
    },[]);

    function getProductDataClick()
    {
        let url = "http://localhost:3500/products?_sort=id&_order=desc&_limit=3";
        axios.get(url).then((resData)=>{
        setLatestProduct(resData.data);
    });
    }
    let resultArray =Latestproduct.map((item,index)=>
    <div className="card">
        <img src={item.Image} width={250} height={250}/>
        <br/>
        <span className="prdName">{item.productName}</span><br/>
        <span className="prdPrice">{item.price}</span>
        <br/>
        <Link to={"/ProductDetails/"+item.id}>View details</Link>

    </div>);

    return(
<>
       {resultArray}

        </>
    );
}
export default LatestProducts;