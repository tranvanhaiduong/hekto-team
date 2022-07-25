import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartItemsSlice";
import { toast } from "react-toastify";
function Unique({pid, image, title, listImage, description, nameProduct, price}) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
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
    <div className="content__unique">
      <div className="content__unique__featuresofa">
        <img alt="" src={image}></img>
      </div>
      <div className="content__unique__slidetrending">
        <div className="content__unique__slidetrending__product">
          <h1>{title}</h1>
        </div>
        <div className="content__unique__slidetrending__one">
          <img alt="" src="./images/Ellipse 65.png"></img>
          <p>All frames constructed with hardwood solids and laminates</p>
        </div>
        <div className="content__unique__slidetrending__one">
          <img alt="" src="./images/Ellipse 66.png"></img>
          <p>
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </p>
        </div>
        <div className="content__unique__slidetrending__one">
          <img alt="" src="./images/Ellipse 67.png"></img>
          <p>Arms, backs and seats are structurally reinforced</p>
        </div>
        <div className="content__unique__slidetrending__addcart">
          <button onClick={addToCart}>Add To Cart</button>
          <div className="content__unique__slidetrending__addcart__price">
            <h3>{nameProduct} </h3>
            <p>${price}.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Unique;
