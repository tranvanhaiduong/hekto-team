import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartItemsSlice";
import { toast } from "react-toastify";
function LeftProduct({
  pid,
  image,
  title,
  colors,
  price,
  sale,
  ratings,
  description,
}) {
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
    <div className="contentShop__shopleft__listproduct__product">
      <div className="contentShop__shopleft__listproduct__product__img">
        <img alt="" src={image}></img>
      </div>
      <div className="contentShop__shopleft__listproduct__product__title">
        <div className="contentShop__shopleft__listproduct__product__title__item">
          <h1>{title}</h1>
          <div className="contentShop__shopleft__listproduct__product__title__item__color">
            {colors.map((color, index) => (
              <img alt="" src={color} key={index}></img>
            ))}
          </div>
        </div>
        <div className="contentShop__shopleft__listproduct__product__title__price">
          <p>${price}.00</p>
          <p className="sale">${sale}.00</p>
          <div className="contentShop__shopleft__listproduct__product__title__price__rating">
            {ratings.map((rating, index) => (
              <img alt="" src={rating} key={index}></img>
            ))}
          </div>
        </div>
        <div className="contentShop__shopleft__listproduct__product__title__description">
          <p>{description}</p>
        </div>
        <div className="contentShop__shopleft__listproduct__product__title__vector">
          <div className="contentShop__shopleft__listproduct__product__title__vector__img">
            <p onClick={addCart}>
              <img alt="" src="/images/Group.png"></img>
            </p>
          </div>
          <div className="contentShop__shopleft__listproduct__product__title__vector__img">
            <a href="/page">
              <img alt="" src="/images/Vector (5).png"></img>
            </a>
          </div>
          <div className="contentShop__shopleft__listproduct__product__title__vector__img">
            <a href={`/product/${pid}`}>
              <img alt="" src="/images/Vector (6).png"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftProduct;
