import {useParams} from "react-router-dom";

import {getProductDetails, getTableValue} from "../../utils/productUtils";
import useFetch from "../../hooks/useFetch";

function SingleProduct() {
    const {productId} = useParams();
    // const product = getProductById(parseInt(index));
    const {items, loading} = useFetch(process.env.REACT_APP_DB_PRODUCTS_URL || "");
    const dbProducts = items;
    const product = dbProducts.find(product => Number(product.id) === Number(productId));

    if (loading) {
        return <div>Loading...</div>
    }

    if (product === undefined)
        return <div>Toodet ei leitud</div>;

    return (
        <div><h2>SingleProduct</h2>
            <div>
                <table>
                    <thead>
                    <tr>
                        {getProductDetails().map(detail => (
                                <th key={detail}>{detail}</th>
                            )
                        )}
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        {getProductDetails().map((detail) => (
                                <td key={detail}>{getTableValue(product, detail)}</td>
                            )
                        )}
                    </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SingleProduct;