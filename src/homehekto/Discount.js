import { useNavigate } from "react-router-dom";

function Discount({pid, image, title, listImage, description, nameProduct, price}) {
  const navigate = useNavigate();
  return (
    <div className="content__discount">
      <div className="content__discount__item">
        <h1>Discount Item</h1>
      </div>
      <div className="content__discount__product">
        <div className="content__discount__product__menu">
          <a href="/#">Wood Chair</a>
          <li>
            <a href="/#">Plastic Chair</a>
            <a href="/#">Sofa Colletion</a>
          </li>
        </div>
        <div className="content__discount__product__discountoff">
          <h1>{title}</h1>
          <p className="p1">{nameProduct}</p>
          <p className="p2">
            {description}
          </p>
          <div className="content__discount__product__discountoff__item">
            <div className="content__discount__product__discountoff__item__simple">
              <ul style={{ listStyleImage: "url('./images/tick.png')" }}>
                <li>Material expose like metals</li>
                <li>Simple neutral colours.</li>
              </ul>
              <ul style={{ listStyleImage: "url('./images/tick.png')" }}>
                <li>Clear lines and geomatric figures</li>
                <li>Material expose like metals</li>
              </ul>
            </div>
          </div>
          <button onClick={()=>navigate(`/product/${pid}`)}>Shop Now</button>
        </div>
        <div className="content__discount__product__tortuga">
          <img alt="" src={image}></img>
        </div>
      </div>
    </div>
  );
}
export default Discount;
