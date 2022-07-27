import { useSelector } from "react-redux";

function Header() {
  const app = useSelector((state) => state.cartItems.value);
  const number = app.length;
  return (
    <div className="header">
      <div className="header__bar">
        <div className="header__bar__left">
          <a href="/#" className="header__bar__left__icons">
            <i className="fal fa-envelope"></i>
            <p>mhhasanul@gmail.com</p>
          </a>
          <a href="/#" className="header__bar__left__iconright">
            <i className="fal fa-phone-volume"></i>
            <p>(12345)67890</p>
          </a>
        </div>
        <div className="header__bar__right">
          <div className="header__bar__right__list">
            <a href="/#">
              English<i className="fal fa-chevron-down"></i>
            </a>
            <a href="/#">
              USD<i className="fal fa-chevron-down"></i>
            </a>
            <a href="/#">
              Login<i className="fal fa-user"></i>
            </a>
            <a href="/#">
              Wishlist<i className="fal fa-heart"></i>
            </a>
            <div className="header__bar__right__list__cart">
              <a href="/ShoppingCurt">
                <i className="fal fa-shopping-cart"></i>
              </a>
              <span className="header__bar__right__list__cart__quantity">
                {number}
              </span>
            </div>
          </div>
        </div>
      </div>
      <label htmlFor="checkbar" className="header__bars">
        <i className="fal fa-bars"></i>
      </label>
      <input type="checkbox" className="headercheck" id="checkbar"></input>
      <div className="header__mobile">
        <label htmlFor="checkbar" className="header__mobile__time">
          <i className="far fa-window-close"></i>
        </label>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/page">Pages</a>
          </li>
          <li>
            <a href="/product">Products</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/shoplist">Shop</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="header__right">
        <div className="header__right__login">
          <div className="header__bar__right__list__cart">
            <a href="/ShoppingCurt">
              <i className="fal fa-shopping-cart"></i>
            </a>
            <span className="header__bar__right__list__cart__quantity">
              {number}
            </span>
          </div>
          <a href="/#">
            <i className="fal fa-user"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
