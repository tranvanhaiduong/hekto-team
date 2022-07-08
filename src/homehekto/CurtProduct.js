function CurtProduct({ image, Name }) {
  return (
    <div className="CurtProduct">
      <div className="CurtProduct__product">
        <img className="CurtProduct__product__img" src={image}></img>
        <div className="CurtProduct__product__name">
          <p className="CurtProduct__product__name__n">{Name}</p>
          <p className="CurtProduct__product__name__c">Color:Brown</p>
          <p className="CurtProduct__product__name__z">Size:XL</p>
        </div>
      </div>
      <p className="CurtProduct__price">$32.00</p>
      <div className="CurtProduct__quantity">
        <button className="CurtProduct__quantity__b">-</button>
        <label className="CurtProduct__quantity_l">1</label>
        <button className="CurtProduct__quantity__b">+</button>
      </div>
      <p className="CurtProduct__total">£219.00</p>
    </div>
  );
}
export default CurtProduct;
