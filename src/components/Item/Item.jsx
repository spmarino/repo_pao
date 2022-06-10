import ItemCount from '../ItemCount/ItemCount';

import "./Item.css"

const Item = ({name, thumbnail, price, id, stock}) => {

    const onAdd = (qty) => {
        alert (`Has agregado ${qty} kilos`);
    };

    return (
        <article className= "product-card">
            <img className= "product-card__image" src={thumbnail} alt="" />

            <h2 className= "porduct-card__name"> {name} </h2>
            <span className= "porduct-card__name"> ${price} </span>

            <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
        </article>
    );
};

export default Item;