import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartItemsSlice";
import { toast } from "react-toastify";

function GridProduct({ image, price, title, pid, sale }) {
  const dispath = useDispatch();
  const addCart = () => {
    dispath(
      addItem({
        pid: pid,
        image: image,
        title: title,
        price: price,
        quantity: 1,
      })
    );
    toast.success("Add to cart");
  };

  return (
    <div className="contentShop__shopgrid__listitem__product">
      <div className="contentShop__shopgrid__listitem__product__img">
        <img alt="" src={image}></img>
      </div>
      <div className="contentShop__shopgrid__listitem__product__shopping">
        <div className="contentShop__shopgrid__listitem__product__shopping__shop">
          <div
            className="contentShop__shopgrid__listitem__product__shopping__shop__cart"
            onClick={addCart}
          >
            <img alt="" src="/images/Group.png"></img>
          </div>
          <div className="contentShop__shopgrid__listitem__product__shopping__shop__cart">
            <a href="/">
              <img alt="" src="/images/Vector (5).png"></img>
            </a>
          </div>
          <div className="contentShop__shopgrid__listitem__product__shopping__shop__cart">
            <a href={`/product/${pid}`}>
              <img alt="" src="/images/Vector (6).png"></img>
            </a>
          </div>
        </div>
      </div>

      <div className="contentShop__shopgrid__listitem__product__title">
        <h1>{title}</h1>
        <div className="contentShop__shopgrid__listitem__product__title__color">
          <img alt="" src="/images/Ellipse 28.png"></img>
          <img alt="" src="/images/Ellipse 29.png"></img>
          <img alt="" src="/images/Ellipse 30.png"></img>
        </div>
        <div className="contentShop__shopgrid__listitem__product__title__price">
          <p>${price}.00 </p>
          <p className="sale">${sale}.00</p>
        </div>
      </div>
    </div>
  );
}
export default GridProduct;
