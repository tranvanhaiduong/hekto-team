function Sidebar({ checkking, rating, id, setCheck, check }) {
  const handleChecked = (name) => {
    const listItem = check.filter((item) => item === name);
    if (listItem.length > 0) {
      const item = check.filter((item) => item !== name);

      setCheck([...item]);
    } else {
      setCheck((prev) => [...prev, name]);
    }
  };
  return (
    <div className="contentShop__shopleft__sidebar__brand__listbrand">
      <div className="contentShop__shopleft__sidebar__brand__listbrand__check">
        {/* <img alt="" src={image}></img> */}
        <div className="squaredcheck">
          <input
            type="checkbox"
            id={id}
            onClick={(e) => handleChecked(checkking)}
          />
          <label htmlFor={id}></label>
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
