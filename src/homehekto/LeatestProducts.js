import {useDispatch} from "react-redux"
import { addItem } from "../redux/CartItemsSlice";
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
function LeatestProducts(props) {
  const navigate= useNavigate();
  const dispatch=useDispatch();
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
    <div className="content__leatest__slide__chairone">
      <div className="content__leatest__slide__chairone__img">
        <div className="content__leatest__slide__chairone__img1">
          <img alt="" src={props.image}></img>
        </div>
        <div className="content__leatest__slide__chairone__img__sale">
          <img alt="" src="./images/Group 27.png"></img>
        </div>
        <div className="content__leatest__slide__chairone__img__shop">
          <div className="content__leatest__slide__chairone__img__shop__like">
            <img className="img1" alt="" src="./images/Group 28.png" onClick={addCart}></img>
            <img alt="" src="./images/Vector (5).png"></img>
            <img alt="" src="./images/Vector (6).png" onClick={()=>navigate(`/product/${props.pid}`)}></img>
          </div>
        </div>
      </div>
      <div className="content__leatest__slide__chairone__price">
        <div className="name">
          <p>{props.title}</p>
        </div>
        <div className="pricesale">
          <p>${props.price}.00</p>
          <p className="sale">${props.sale}.00</p>
        </div>
      </div>
    </div>
  );
}
export default LeatestProducts;
