import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { build } from '../../utils/buildUtils';
import useFetch from '../../hooks/useFetch';
import ConfirmationModal, { ConfirmationModalInterface } from '../../components/ConfirmationModal';
import { Category } from '../../models/Category';

function MaintainCategories() {
    // const dbUrl = "https://react-mihkel-10-2024-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
    const [newCategory, setNewCategory] = useState<Category>();
    const [categories, setCategories] = useState<Category[]>([]);
    const childRef = useRef<ConfirmationModalInterface>();

    const {items, loading} = useFetch(process.env.REACT_APP_DB_CATEGORIES_URL || "");
    const dbCategories: Category[] = items;

    useEffect(() => {
        if (loading) {
            return;
        }
        setCategories(dbCategories);
    }, [dbCategories, loading]);




    function add() {
        fetch(process.env.REACT_APP_DB_CATEGORIES_URL || "", {method: "POST", body: JSON.stringify(newCategory)})
            .then(() => {
                if (newCategory === undefined) {
                    return;
                }
                setCategories([...categories, newCategory]);
                setNewCategory(undefined);
            });
    }

    function handleBuild(key: string, event: ChangeEvent<HTMLInputElement>) {
        const object = build(key, event, newCategory);
        setNewCategory({...object});
    }
    
    function remove(category: {name: string}) {
        const index = categories.findIndex(cat => cat.name === category.name);
        categories.splice(index, 1);
        setCategories(categories.slice());
        if (childRef.current === undefined) {
            return;
        }
        childRef.current.handleClose();
    }

    return (
        <div>
            <div>Kategooria: {JSON.stringify(newCategory)}</div>
            <label>Name</label> <br />
            <input value={(newCategory && newCategory.name) || ""} onChange={(e) => handleBuild("name", e)} type="text" /> <br />
            <button onClick={add}>Lisa andmebaasi kategooria</button>

            {categories.map(category => <div key={category.name}>
                {category.name}
                <button onClick={() => childRef.current && childRef.current.handleShow(category)}>x</button>
            </div>)}

            <ConfirmationModal ref={childRef} onConfirmation={remove} />
        </div>
    );
}

export default MaintainCategories;