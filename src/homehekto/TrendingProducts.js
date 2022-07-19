function TrendingProducts({ pid, image, title, price, sale }) {
  return (
    <div className="content__trending__productitems__item1__cantilever">
      <div className="content__trending__productitems__item1__cantilever__chair">
        <img alt="" src={image}></img>
      </div>
      <div className="content__trending__productitems__item1__cantilever__price">
        <h2>{title}</h2>
        <div className="content__trending__productitems__item1__cantilever__price__sale">
          <p>{price}</p>
          <p className="sale">{sale}</p>
        </div>
      </div>
    </div>
  );
}
export default TrendingProducts;
