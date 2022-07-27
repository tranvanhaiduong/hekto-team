import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../redux/CartItemsSlice";
import { toast } from "react-toastify";
function PlayWood(props) {

  const {pid="", image="", title="", price=""} = props
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
    <div className="contentShop__playwood">
      <div className="contentShop__playwood__chair">
        <div className="contentShop__playwood__chair__left">
          <img alt="" src="/images/Rectangle 134.png"></img>
          <img alt="" src="/images/Rectangle 136.png"></img>
          <img alt="" src="/images/Rectangle 137.png"></img>
        </div>
        <div className="contentShop__playwood__chair__center">
          <img alt="" src={image}></img>
        </div>
        <div className="contentShop__playwood__chair__right">
          <h1>{title}</h1>
          <div className="contentShop__playwood__chair__right__img">
          {new Array(5).fill(1).map((item,index) => (
              <img key={index} alt="" src="/images/Vector (8).png"></img>
            ))}
            <span>(22)</span>
          </div>
          <div className="contentShop__playwood__chair__right__price">
            <p className="price">$32.00</p>
            <p className="sale">$32.00</p>
          </div>
          <p>Color</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.<br></br>
          </span>
          <div className="contentShop__playwood__chair__right__button">
            <button onClick={addToCart}>Add to cart</button>
            <img alt="" src="/images/Vector (5).png"></img>
          </div>
          <p>Categories:</p>
          <p>Tags</p>
          <div className="contentShop__playwood__chair__right__share">
            <p>Share</p>
            <div className="contentShop__playwood__chair__right__share__fb">
              <img alt="" src="/images/Group 202.png"></img>
            </div>
            <div className="contentShop__playwood__chair__right__share__instagram">
              <img alt="" src="/images/inta.png"></img>
            </div>
            <div className="contentShop__playwood__chair__right__share__fb">
              <img alt="" src="/images/Group 204.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayWood;
