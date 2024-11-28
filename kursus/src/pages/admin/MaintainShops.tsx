import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { build } from '../../utils/buildUtils';
import useFetch from '../../hooks/useFetch';
import ConfirmationModal, { ConfirmationModalInterface } from '../../components/ConfirmationModal';
import { Shop } from '../../models/Shop';

function MaintainShops() {
    const [newShop, setNewShop] = useState<Shop>();
    const [shops, setShops] = useState<Shop[]>([]);
    const childRef = useRef<ConfirmationModalInterface>();

    const {items, loading} = useFetch(process.env.REACT_APP_DB_SHOPS_URL || "");
    const dbShops: Shop[] = items;

    useEffect(() => {
        if (loading) {
            return;
        }
        setShops(dbShops);
    }, [dbShops, loading]);

    function add() {
        if (process.env.REACT_APP_DB_SHOPS_URL === undefined) {
            return;
        }
        if (newShop === undefined) {
            return;
        }
        shops.push(newShop);
        fetch(process.env.REACT_APP_DB_SHOPS_URL, {method: "PUT", body: JSON.stringify(shops)})
            .then(() => {
                // setShops([...shops, newShop]);
                if (newShop === undefined) {
                    return;
                }
                setShops([...shops]);
                setNewShop(undefined);
            });
    }

    function handleBuild(key: string, event: ChangeEvent<HTMLInputElement>) {
        const object = build(key, event, newShop);
        setNewShop({...object});
    }

    function remove(shop: Shop) {
        const index = shops.findIndex(s => s.name === shop.name);
        shops.splice(index, 1);
        setShops(shops.slice());
        if (childRef.current === undefined) {
            return;
        }
        childRef.current.handleClose();
    }

    return (
        <div>
            <div>Pood: {JSON.stringify(newShop)}</div>
            <label>Name</label> <br />
            <input value={(newShop && newShop.name) || ""} onChange={(e) => handleBuild("name", e)} type="text" /> <br />
            <label>Latitude</label> <br />
            <input value={(newShop && newShop.lat) || ""} onChange={(e) => handleBuild("lat", e)} type="number" /> <br />
            <label>Longitude</label> <br />
            <input value={(newShop && newShop.long) || ""} onChange={(e) => handleBuild("long", e)} type="number" /> <br />
            <button onClick={add}>Lisa andmebaasi pood</button>

            {shops.map(shop => 
            <div key={shop.name}>
                <div>Nimi: {shop.name}</div>
                <div>Latitude: {shop.lat}</div>
                <div>Longitude: {shop.long}</div>
                <button onClick={() => childRef.current && childRef.current.handleShow(shop)}>x</button>
                <br />
            </div>)}

            <ConfirmationModal ref={childRef} onConfirmation={remove} />
        </div>
    );
}

export default MaintainShops;