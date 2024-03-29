function RelatedProduct({ image, title, rating, price }) {
  return (
    <div className="contentShop__related__slide__shopfashion">
      <div className="contentShop__related__slide__shopfashion__img">
        <img alt="" src={image}></img>
      </div>
      <div className="contentShop__related__slide__shopfashion__men">
        <div className="contentShop__related__slide__shopfashion__men__fashion">
          <p>{title}</p>
          <div className="contentShop__related__slide__shopfashion__men__fashion__rating">
            {rating.map((rate, index) => (
              <img alt="" src={rate} key={index}></img>
            ))}
          </div>
        </div>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}
export default RelatedProduct;
