import React, { useRef } from 'react';

function AddProduct() {
    const dbUrl = "https://react-mihkel-10-2024-default-rtdb.europe-west1.firebasedatabase.app/products.json";
    const idRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const imageRef = useRef();
    const rateRef = useRef();
    const countRef = useRef();

    function add() {
        const newProduct = {
            "id": idRef.current.value,
            "title": titleRef.current.value,
            "price": Number(priceRef.current.value),
            "description": descriptionRef.current.value,
            "category": categoryRef.current.value,
            "image": imageRef.current.value,
            "rating": {
              "rate": Number(rateRef.current.value),
              "count": Number(countRef.current.value)
            }
          };

        fetch(dbUrl, {method: "POST", body: JSON.stringify(newProduct)});
    }

    return (
        <div>
            <label>ID</label> <br />
            <input ref={idRef} type="text" /> <br />
            <label>Title</label> <br />
            <input ref={titleRef} type="text" /> <br />
            <label>Price</label> <br />
            <input ref={priceRef} type="text" /> <br />
            <label>Description</label> <br />
            <input ref={descriptionRef} type="text" /> <br />
            <label>Category</label> <br />
            <input ref={categoryRef} type="text" /> <br />
            <label>Image</label> <br />
            <input ref={imageRef} type="text" /> <br />
            <label>Rate</label> <br />
            <input ref={rateRef} type="text" /> <br />
            <label>Count</label> <br />
            <input ref={countRef} type="text" /> <br />
            <button onClick={add}>Lisa andmebaasi toode</button>
        </div>
    );
}

export default AddProduct;