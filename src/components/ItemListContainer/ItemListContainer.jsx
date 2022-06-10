import '../ItemListContainer/ItemListContainer.css'
import {React, useEffect, useState} from 'react';
import {productList} from '../data/data.jsx';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () =>{
    const [products, setProducts] = useState ([]);

    const getProducts = new Promise ( (resolve, reject) => {
        setTimeout ( () => {
            resolve(productList);
        }, 2000 )
    });

const getProductsFromDB = async () => {
    try {
        const result = await getProducts; setProducts(result);
    }
    catch (error) {
        console.log(error);
        alert('No podemos mostrar el/los productos en este momento');
    }
};

useEffect (() => {
    getProductsFromDB();
}, []);


    return (
        <div className='Container'>
        

            <ItemList products = {products}/>
        </div>
    )
}

export default ItemListContainer