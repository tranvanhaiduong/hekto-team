import RegisterAccountContact from "./RegisterAccountContact";
import RegisterAccountProduct from "./RegisterAccountProduct";

export default function RegisterAccountShip() {
  const ListProduct = [
    {
      image : "../images/RectangleAc1.png",
    },{
      image : "../images/RectangleAc2.png",
    },{
      image : "../images/RectangleAc3.png",
    },{
      image : "../images/RectangleAc4.png",
    },{
      image : "../images/RectangleAc5.png",
    },
  ];
  return (
    <div className="RegisterAccountShip">
      <div className="RegisterAccountShip__vp">
        <p className="RegisterAccountShip__vp__n">Hekto Demo</p>
        <p className="RegisterAccountShip__vp__a">
          Cart/ Information/ Shipping/ Payment
        </p>
      </div>
      <div className="RegisterAccountShip__ship">
        <div className="RegisterAccountShip__ship__left">
          <RegisterAccountContact/>
        </div>
        <div className="RegisterAccountShip__ship__right">
          <div className="RegisterAccountShip__ship__right__product">
            {ListProduct.map((product) => (
              <RegisterAccountProduct image={product.image}/>
            ))}
          </div>
          <div className="RegisterAccountShip__ship__right__checkout">
            
          </div>
        </div>
      </div>
    </div>
  );
}
