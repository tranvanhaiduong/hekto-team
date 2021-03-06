function Navigation({ title, name }) {
  return (
    <div className="navigation">
      <div className="navigation__title">{title}</div>
      <div className="navigation__shop">
        <a href="/">Home</a>
        <span>.</span>
        <a href="/">Page</a>
        <span className="shopgrid">.</span>
        <a className="shopgrid" href="/">
          {name}
        </a>
      </div>
    </div>
  );
}
export default Navigation;
