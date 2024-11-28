import React, {useEffect, useRef, useState} from 'react';
import {getProductDetails, getTableValue} from "../../utils/productUtils";
import useFetch from '../../hooks/useFetch';
import ConfirmationModal from '../../components/ConfirmationModal';


//let productToBeDeleted = {};


function MaintainProducts(props) {
    const [products, setProducts] = useState([]);
    const {items, loading} = useFetch(process.env.REACT_APP_DB_PRODUCTS_URL);
    const childRef = useRef();
    const dbProducts = items.slice();

    useEffect(() => {
        if (loading === true) {
            return;
        }
        setProducts(items);
    }, [items, loading]);


    function handleDeleteProduct(product) {
        console.log("handleDeleteProduct")
        const index = dbProducts.findIndex(p => p.id === product.id);
        if (index === -1) {
            return;
        }
        dbProducts.splice(index, 1);
        setProducts(dbProducts.slice());
        childRef.current.toBeDeletedRef.current = {};
        childRef.current.handleClose();
        // fetch(process.env.REACT_APP_DB_PRODUCTS_URL, {method: "PUT", body: JSON.stringify(dbProducts)});
    }

    if (loading) {
        <div>Loading...</div>
    }

    return (
        <div><h2>MaintainProducts</h2>
            <div>
                <table>
                    <thead>
                    <tr>
                        {getProductDetails().map((detail, index) => (
                                <th key={detail}>{detail}</th>
                            )
                        )}
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                        {products.map((product, index) => (
                            <tr key={index}>
                                {getProductDetails().map((detail) => (
                                        <td key={index+detail}>{getTableValue(product, detail)}</td>
                                    )
                                )}
                                <td><button onClick={()=>childRef.current.handleShow(product)}>delete</button> </td>
                            </tr>
                            )
                        )}

                    </tbody>
                </table>
            </div>

            <ConfirmationModal ref={childRef} onConfirmation={handleDeleteProduct} />

        </div>
    );
}

export default MaintainProducts;