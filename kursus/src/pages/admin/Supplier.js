import React, { useEffect, useState } from 'react'
import { getProductDetails, getTableValue } from '../../utils/productUtils';

function Supplier() {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";
  
  useEffect(() => { // componentDidMount    componentWillMount
    fetch(url)
      .then(res => res.json()) // staatuskoodi, headerid jne
      .then(json => setProducts(json)) // body
  }, []);

  return (
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
                    </tr>
                    )
                )}

            </tbody>
        </table>
    </div>
  )
}

export default Supplier