import React, { useEffect, useState } from "react";
import { deleteItem, updateItem } from "../redux/CartItemsSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
function CurtProduct(props) {
  const cart = props.item;
  const [item, setItem] = useState(cart);
  const [quantity, setQuantity] = useState(cart.quantity);
  const dispatch = useDispatch();
  useEffect(() => {
    setItem(cart);
    setQuantity(cart.quantity);
  }, [cart]);
  const removeCart = (obj) => {
    dispatch(deleteItem(obj));
    toast.error("Delete product", { position: "top-right" });
  };
  const updateQuantity = (opt) => {
    if (opt === "-") {
      dispatch(
        updateItem({
          ...item,
          quantity: quantity - 1 === 0 ? 1 : quantity - 1,
        })
      );
    }
    if (opt === "+") {
      dispatch(
        updateItem({
          ...item,
          quantity: quantity + 1,
        })
      );
    }
  };
  return (
    <div className="CurtProduct">
      <div className="CurtProduct__product">
        <div className="CurtProduct__product__img">
          <img src={item.image} alt=""></img>
          <span
            className="header__bar__right__list__cart__quantity"
            onClick={() => removeCart(item)}
          >
            X
          </span>
        </div>
        <div className="CurtProduct__product__name">
          <p className="CurtProduct__product__name__n">{item.title}</p>
          <p className="CurtProduct__product__name__c">Color:Brown</p>
          <p className="CurtProduct__product__name__z">Size:XL</p>
        </div>
      </div>
      <p className="CurtProduct__price">${item.price}.00</p>
      <div className="CurtProduct__quantity">
        <div className="CurtProduct__quantity__number">
        <button
          className="CurtProduct__quantity__number__b"
          onClick={() => updateQuantity("-")}
        >
          -
        </button>
        <label className="CurtProduct__quantity__number__l">{item.quantity}</label>
        <button
          className="CurtProduct__quantity__number__b"
          onClick={() => updateQuantity("+")}
        >
          +
        </button>
        </div>
      </div>
      <p className="CurtProduct__total">£{item.quantity * item.price}.00</p>
    </div>
  );
}
export default CurtProduct;
