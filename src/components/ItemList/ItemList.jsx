import Item from "../Item/Item.jsx";
import "./ItemList.css";

const ItemList = ({products}) => {
  return (
    <div className="product-list-container">
      {<>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Item
                name={product.name}
                thumbnail={product.thumbnail}
                price={product.price}
                stock={product.stock}
                id={product.id}
              />
            </div>
          );
        })}
      </>}
    </div>
  );
};

export default ItemList;
