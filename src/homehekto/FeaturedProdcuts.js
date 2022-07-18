import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addItem } from "../redux/CartItemsSlice";
import { toast } from "react-toastify";

function FeaturedProduct(props) {
 const navigate=useNavigate();
 const dispatch = useDispatch();
 const addCart=()=>{
  dispatch(
    addItem({
      pid: props.pid,
      image: props.image,
      title: props.title,
      price: props.price,
      quantity: 1,
    })
  );
  toast.success("Add to cart");
 }
  return (
    <div className="content__featured__slide__chairone">
      <div className="content__featured__slide__chairone__icon">
        <div className="content__featured__slide__chairone__icon__shop">
          <img className="img1" alt="" src="./images/Group.png" onClick={addCart}></img>
          <img alt="" src="./images/Vector (1).png"></img>
          <img alt="" src="./images/Vector.png" onClick={()=>navigate(`/product/${props.pid}`)}></img>
        </div>
      </div>
      <div className="content__featured__slide__chairone__img">
        <img className="img4" alt="" src={props.image}></img>
        <div className="content__featured__slide__chairone__img__button">
          <button onClick={()=>navigate(`/product/${props.pid}`)}>View Details</button>
        </div>
      </div>
      <div className="content__featured__slide__chairone__price">
        <h2>Cantilever chair</h2>
        <div className="content__featured__slide__chairone__price__img">
          <img alt="" src="./images/Rectangle 93.png"></img>
          <img alt="" src="./images/Rectangle 94.png"></img>
          <img alt="" src="./images/Rectangle 95.png"></img>
        </div>
        <p className="code">Code - Y523201</p>
        <p className="price">$42.00</p>
      </div>
    </div>
  );
}
export default FeaturedProduct;
