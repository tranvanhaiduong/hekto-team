import { useNavigate } from "react-router-dom";

function TopCategories({ image,title,price,pid }) {
  const navigate= useNavigate();
  return (
    <div className="content__top__mini__LCW">
      <div className="content__top__mini__LCW__chair">
        <img alt="" src={image}></img>
        <div className="content__top__mini__LCW__chair__btn ">
          <button onClick={()=>navigate(`/product/${pid}`)}>View Shop</button>
        </div>
      </div>
      <div className="content__top__mini__LCW__price">
        <h3>{title}</h3>
        <p>${price}.00</p>
      </div>
    </div>
  );
}
export default TopCategories;
