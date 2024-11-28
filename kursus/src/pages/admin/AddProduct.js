import React, { useState } from 'react';
import { build } from '../../utils/buildUtils';
import useFetch from '../../hooks/useFetch';

function AddProduct() {
    // const dbProductsUrl = "https://react-mihkel-10-2024-default-rtdb.europe-west1.firebasedatabase.app/products.json";
    // const dbCategoriesUrl = "https://react-mihkel-10-2024-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

    const [newProduct, setNewProduct] = useState({});

    const categoriesResponse = useFetch(process.env.REACT_APP_DB_CATEGORIES_URL);
    const categories = categoriesResponse.items;

    const {items} = useFetch(process.env.REACT_APP_DB_PRODUCTS_URL);
    const dbProducts = items;

    function add() {
        fetch(process.env.REACT_APP_DB_PRODUCTS_URL, {method: "POST", body: JSON.stringify(newProduct)});
        setNewProduct({});
    }

    function handleBuild(key, event) {
        const object = build(key, event, newProduct);
        setNewProduct({...object});
    }

    function checkIfDisabled() {
        if (newProduct.id === undefined || newProduct.title === undefined || 
            newProduct.price === undefined || newProduct.description === undefined || 
            newProduct.category === undefined || newProduct.image === undefined || 
            newProduct.rating.rate === undefined  || newProduct.rating.count === undefined ||
            message === "Found another product with same ID!" 
        ) {
            return true;
        }
        return false
    }

    const [message, setMessage] = useState("");

    const checkIdUniqueness = () => {
        const product = dbProducts.find(product => product.id === newProduct.id);
        if (product === undefined) {
            setMessage("");
        } else {
            setMessage("Found another product with same ID!");
        }
    }

    return (
        <div>
            <div>{message}</div>
            <div>Toode: {JSON.stringify(newProduct)}</div>
            <label>ID</label> <br />
            <input value={newProduct.id || ""} onChange={(e) => {handleBuild("id", e); checkIdUniqueness(); }} type="number" /> <br />
            <label>Title</label> <br />
            <input value={newProduct.title || ""} onChange={(e) => handleBuild("title", e)} type="text" /> <br />
            <label>Price</label> <br />
            <input value={newProduct.price || ""} onChange={(e) => handleBuild("price", e)} type="number" /> <br />
            <label>Description</label> <br />
            <input value={newProduct.description || ""} onChange={(e) => handleBuild("description", e)} type="text" /> <br />
            <label>Category</label> <br />
            {/* <input onChange={(e) => handleBuild("category", e)} type="text" /> <br /> */}
            <select value={newProduct.category || ""} onChange={(e) => handleBuild("category", e)}>
                <option disabled selected value="">Vali kategooria!</option>
                {categories.map(category => <option key={category.name} value={category.name}>{category.name}</option>)}
            </select> <br />
            <label>Image</label> <br />
            <input value={newProduct.image || ""} onChange={(e) => handleBuild("image", e)} type="text" /> <br />
            <label>Rate</label> <br />
            <input value={newProduct.rating?.rate || ""} onChange={(e) => handleBuild("rating.rate", e)} type="number" /> <br />
            <label>Count</label> <br />
            <input value={newProduct.rating?.count || ""} onChange={(e) => handleBuild("rating.count", e)} type="number" /> <br />
            <button disabled={checkIfDisabled()} onClick={add}>Lisa andmebaasi toode</button>
        </div>
    );
}

export default AddProduct;