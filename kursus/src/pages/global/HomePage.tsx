import React, {useEffect, useMemo, useState} from 'react';
import {getUniqueCategories} from "../../utils/productUtils";
import {filterCategory, filterSearch} from "../../utils/filterSortUtils";
import useFetch from '../../hooks/useFetch';
import { useTranslation } from 'react-i18next';
import SortButtons from '../../components/SortButtons';
import Product from '../../components/Product';
import styles from "../../css/HomePage.module.css"; 
// läheb globaalselt igale failile kui "styles from" puudub

function HomePage() {
// Hookide reeglid (Reacti erikood)
// 1. Peab algama use eesliidesega
// 2. Peab olema imporditud
// 3. Peab käima tõmbama sulud lõpus
// 4. Ei tohi tingimuslik
// 5. Ei tohi käivitada mitu korda (ei tohi ka funktsiooni sees)

    const { t } = useTranslation();
    const [products, setProducts] = useState<any[]>([]);
    const {items, loading} = useFetch(process.env.REACT_APP_DB_PRODUCTS_URL || "");
    const dbProducts = items;
    const categories = useMemo(() => getUniqueCategories(dbProducts), [dbProducts]);

    useEffect(() => {
        setProducts(dbProducts);
    }, [dbProducts]);

    if (loading) {
        return <div>{t("loading")}</div>
    }

    return (
        <div>
            <h2>HomePage</h2>
            <div>
                <SortButtons 
                    products={products}
                    setProducts={setProducts} />
                <div>
                    {categories.map((category, index) =>
                        <button key={index} onClick={() => setProducts(filterCategory(dbProducts,category))}>{category}</button>)
                    }
                </div>
                <div>
                    <input onChange={(event)=> setProducts(filterSearch(dbProducts, event.target.value))} type="text" placeholder="Search"/>
                </div>
                <div className={styles.products}>
                {products.map((product, index) =>
                    <Product key={index} product={product} />
                )}
                </div>
            </div>

        </div>
    );
}

export default HomePage;