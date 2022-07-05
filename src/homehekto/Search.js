function Search() {
  return (
    <div className="contentShop__search">
      <div className="contentShop__search__left">
        <h1>Ecommerce Acceories & Fashion item </h1>
        <p>About 9,620 results (0.62 seconds)</p>
      </div>
      <div className="contentShop__search__right">
        <div className="contentShop__search__right__page">
          <p>Per Page:</p>
          <input></input>
        </div>
        <div className="contentShop__search__right__sort">
          <p>Sort By:</p>
          <div className="contentShop__search__right__sort__img">
            <input placeholder="Best Match"></input>
            <img alt="" src="./images/Vector (2).png"></img>
          </div>
        </div>
        <div className="contentShop__search__right__view">
          <div className="contentShop__search__right__view__img">
            <p>View:</p>
            <img alt="" src="./images/clarity.png"></img>
            <img alt="" src="./images/Vector (7).png"></img>
          </div>
          <input></input>
        </div>
      </div>
    </div>
  );
}
export default Search;
