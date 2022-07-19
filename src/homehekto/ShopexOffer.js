function ShopexOffer({ pid, image, title, description }) {
  return (
    <div className="content__shopex__support__one">
      <img alt="" src={image}></img>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
export default ShopexOffer;
