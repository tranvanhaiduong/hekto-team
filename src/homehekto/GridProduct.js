import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartItemsSlice";
import { toast } from "react-toastify";

function GridProduct({ image, price, title, pid }) {
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
          <div onClick={addCart}>
            <img alt="" src="/images/Group.png"></img>
          </div>
          <a href="/">
            <img alt="" src="/images/Vector (5).png"></img>
          </a>
          <a href={`/product/${pid}`}>
            <img alt="" src="/images/Vector (6).png"></img>
          </a>
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
          <p>$26.00 </p>
          <p className="sale">$42.00</p>
        </div>
      </div>
    </div>
  );
}
export default GridProduct;
