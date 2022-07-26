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
  vectors,
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
            {colors.map((color) => (
              <img alt="" src={color}></img>
            ))}
          </div>
        </div>
        <div className="contentShop__shopleft__listproduct__product__title__price">
          <p>{price}</p>
          <p className="sale">{sale}</p>
          <div className="contentShop__shopleft__listproduct__product__title__price__rating">
            {ratings.map((rating) => (
              <img alt="" src={rating}></img>
            ))}
          </div>
        </div>
        <div className="contentShop__shopleft__listproduct__product__title__description">
          <p>{description}</p>
        </div>
        <div className="contentShop__shopleft__listproduct__product__title__vector">
          <div className="contentShop__shopleft__listproduct__product__title__vector__img" >
            <a onClick={addCart}>
              <img alt="" src="/images/Group.png"> </img>
            </a>
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
