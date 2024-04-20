import { useEffect, useState } from "react";
import axios from 'axios';
 
function AdminProductList() { 
    
    const [productArray, setProductArray ] = useState([]); 
    
    // For reading data from user through textboxes
    const [id, setid] = useState("");
    const[category,setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const[detail,setDetail] = useState("");
    const[Image,setImage] = useState("");

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


    function addProductClick()
    {
        let ProductObj = {};
        ProductObj.id = id;
        ProductObj.category = category;
        ProductObj.productName = productName;
        ProductObj.price = price;
        ProductObj.detail = detail;
        ProductObj.Image = Image;


        let url= "http://localhost:3500/products";
        axios.post(url,  ProductObj ).then( (resData) => 
        { 
			 // logic 
             alert("New Product details are inserted in server");
             getProductsClick();
        });

        clearFields();
    }


    function deleteProductClick(id)
    { 
        let flag =  window.confirm("Do you want to delete?");

        if(flag == false)
        {
            return;
        }

        let url= "http://localhost:3500/products/" + id;
        axios.delete(url).then( (resData) => 
        {	              
              alert("Product details are deleted from server");
              getProductsClick();
        });
    }

    function selectProductClick(id)
    { 
        let url= "http://localhost:3500/products/" + id;
        axios.get(url).then( (resData) => 
        {   
            let ProductObj =  resData.data;
           
            setid(ProductObj.id);
            setCategory(ProductObj.category);
            setProductName(ProductObj.productName);
            setPrice(ProductObj.price);
            setDetail(ProductObj.detail);
            setImage(ProductObj.Image);
              
        });
        
         
    }


    function updateProductClick()
    {
        let ProductObj = {};
        ProductObj.id = id;
        ProductObj.category = category;
        ProductObj.productName = productName;
        ProductObj.price = price;
        ProductObj.detail = detail;
        ProductObj.Image = Image;

        let url= "http://localhost:3500/products/" + ProductObj.id;
        axios.put(url,  ProductObj ).then( (resData) => 
        { 
			 alert("Product details are updated in server");
             getProductsClick();
        });
    }



    function clearFields()
    {
        setid("");
        setCategory("");
        setProductName("");
        setPrice("");
        setDetail("");
        setImage("");
    }


 
    let resultArray = productArray.map((item, index) =>  
        <tr key={index}>
            <td>{item.id}</td>
        <td>{item.category}</td>
        <td>{item.productName}</td>
        <td> ₹{item.price}</td> 
        <td>{item.detail}</td>
        <td><img src ={item.Image} width="100" height="100"/></td> 
            <td>
                    <img src="./Images/sel.png" width = "30" height = "30" onClick={() => selectProductClick(item.id) }/>
                    <img src="./Images/del.png"  width = "30" height = "30" onClick={() => deleteProductClick(item.id) }/>
            </td>
        </tr>
     );

    return (
        <>
            <h3>Apple Products Details Management List</h3>
            <hr />

            <input  type="text" value={id} placeholder="Enter Product Id" onChange={ (e) => setid(e.target.value) } />&nbsp;
            <input  type="text" value={category} placeholder="Enter Category"  onChange={ (e) => setCategory(e.target.value) } />&nbsp;
            <input  type="text" value={productName} placeholder="Enter Product Name"   onChange={ (e) => setProductName(e.target.value) } />&nbsp;
            <input  type="text" value={price} placeholder="Enter Product price"   onChange={ (e) => setPrice(e.target.value) } />&nbsp;
            <input  type="text" value={detail} placeholder="Enter Product details"   onChange={ (e) => setDetail(e.target.value) } />&nbsp;
            <input  type="text" value={Image} placeholder="enter Product image url"  onChange={ (e) => setImage(e.target.value) } />&nbsp;&nbsp;
            <input type="button" className="btn btn-primary"  value="AddProduct" onClick={addProductClick} /> &nbsp;
            <input type="button" className="btn btn-primary"  value="UpdateProduct" onClick={updateProductClick} />
            
                        <hr/>
 
           
           
           
         

            <table className="table-dark" border="2" width="100%" height="700" cellspacing="0" cellpadding="5">
                <tr>
                <th>Product Id</th>
                <th>category</th>
                <th> Product Name</th>
                <th>Product Price</th>
                <th>Product detail</th> 
                <th>Product Image</th> 
                </tr>
                {resultArray}
            </table>
        </>
    );
}

export default AdminProductList;