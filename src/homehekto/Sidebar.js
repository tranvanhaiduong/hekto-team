function Sidebar({ checkking, rating }) {

  return (
    <div className="contentShop__shopleft__sidebar__brand__listbrand">
      <div className="contentShop__shopleft__sidebar__brand__listbrand__check">
        {/* <img alt="" src={image}></img> */}
        <div className="squaredcheck">
          <input type="checkbox" id={`squaredcheck`} />
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
        <a href="/">{checkking}</a>
      </div>
    </div>
  );
}
export default Sidebar;
