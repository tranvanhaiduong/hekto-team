import CurtProduct from "../homehekto/CurtProduct";
import Label from "../homehekto/label";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import productData from "../fake -data/fakedata-shopgrid";
import { clearCart } from "../redux/CartItemsSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function CurtListPr() {
  const cartItems = useSelector((state) => state.cartItems.value);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCartProducts(productData.getCartDetail(cartItems));
    setTotalPrice(
      cartItems.reduce((total, item) => total + +item.quantity * +item.price, 0)
    );
  }, [cartItems]);

  const clearCarts = () => {
    dispatch(clearCart());
    toast.warning("Delete");
  };

  const handleCheckOut = () =>
    navigate("/ordercompleted", dispatch(clearCart()));
  return (
    <div className="ProductCurt">
      <div className="ProductCurt__left">
        <div className="ProductCurt__left__up">
          <p className="ProductCurt__left__up__prd">Product</p>
          <p className="ProductCurt__left__up__pri">Price</p>
          <p className="ProductCurt__left__up__qtt">Quantity</p>
          <p className="ProductCurt__left__up__tol">Total</p>
        </div>
        <div className="ProductCurt__left__bwn">
          {cartProducts.length > 0 &&
            cartProducts.map((item, index) => (
              <CurtProduct item={item} key={index} />
            ))}
        </div>
        <div className="total__price__mobile">Thanh toán: £{totalPrice}.00</div>
        <div className="ProductCurt__left__down">
          <button className="ProductCurt__left__down__upd">Update Curt</button>
          <button className="ProductCurt__left__down__cle" onClick={clearCarts}>
            Clear Curt
          </button>
        </div>
      </div>
      <div className="ProductCurt__right">
        <div className="ProductCurt__right__cartTT">
          <div className="ProductCurt__right__cartTT__na">Cart Totals</div>
          <div className="ProductCurt__right__cartTT__btn">
            <div className="ProductCurt__right__cartTT__btn__sub">
              <p className="ProductCurt__right__cartTT__btn__sub__i">
                Subtotals:
              </p>
              <p className="ProductCurt__right__cartTT__btn__sub__p">£219.00</p>
            </div>
            <div className="ProductCurt__right__cartTT__btn__tot">
              <p className="ProductCurt__right__cartTT__btn__tot__i">Totals:</p>
              <p className="ProductCurt__right__cartTT__btn__tot__p">
                £{totalPrice}.00
              </p>
            </div>
            <div className="ProductCurt__right__cartTT__btn__ckb">
              <input
                className="ProductCurt__right__cartTT__btn__ckb__c"
                type={"checkbox"}
              ></input>
              <p className="ProductCurt__right__cartTT__btn__ckb__p">
                Shipping & taxes calculated at checkout
              </p>
            </div>
            <div className="ProductCurt__right__cartTT__btn__btcl">
              <button
                className="ProductCurt__right__cartTT__btn__btcl__bt"
                onClick={handleCheckOut}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="ProductCurt__right__calS">
          <div className="ProductCurt__right__calS__name">
            Calculate Shopping
          </div>
          <div className="ProductCurt__right__calS__btn">
            <Label />
            <button className="ProductCurt__right__calS__btn__btcl">
              Calculate Shiping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CurtListPr;
