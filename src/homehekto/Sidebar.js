function Sidebar({ check, rating, key }) {
  console.log(typeof key);
  return (
    <div className="contentShop__shopleft__sidebar__brand__listbrand">
      <div className="contentShop__shopleft__sidebar__brand__listbrand__check">
        {/* <img alt="" src={image}></img> */}
        <div className="squaredcheck">
          <input type="checkbox" id={`squaredcheck ${key}`} />
          <label htmlFor="squaredcheck"></label>
        </div>
      </div>

      {rating === null ? (
        <></>
      ) : (
        <div className="contentShop__shopleft__sidebar__brand__listbrand__checkimg">
          {rating}
        </div>
      )}
      <div className="contentShop__shopleft__sidebar__brand__listbrand__checklist">
        <a href="/">{check}</a>
      </div>
    </div>
  );
}
export default Sidebar;
