import CurtProduct from "../homehekto/CurtProduct";
import Label from "../homehekto/label";

export default function CurtListPr() {

     const listCurt = [
      {
        image : "../images/productCurt1.png",
        Name : "Ut diam consequat"
      },
      {
        image : "../images/productCurt2.png",
        Name : "Vel faucibus posuere"
      },
      {
        image : "../images/productCurt3.png",
        Name : "Ac vitae vestibulum"
      },
      {
        image : "../images/productCurt4.png",
        Name : "Elit massa diam"
      },
      {
        image : "../images/productCurt5.png",
        Name : "Proin pharetra elementum"
      }
    ];

    return (
      <div className="ProductCurt">
        <div className="ProductCurt__left">
          <div className="ProductCurt__left__up">
            <h className="ProductCurt__left__up__prd">Product</h>
            <h className="ProductCurt__left__up__pri">price</h>
            <h className="ProductCurt__left__up__qtt">Quantity</h>
            <h className="ProductCurt__left__up__tol">Total</h>{" "}
          </div>
          <div className="ProductCurt__left__bwn">
              {listCurt.map((curt) => (
                <CurtProduct image={curt.image} Name={curt.Name}/>
              ))}
          </div>
          <div className="ProductCurt__left__down">
            <button className="ProductCurt__left__down__upd">
              Update Curt</button>
            <button className="ProductCurt__left__down__cle">
              Clear Curt</button>
          </div>
        </div>
        <div className="ProductCurt__right">
          <div className="ProductCurt__right__cartTT">
            <h className="ProductCurt__right__cartTT__na">Cart Totals</h>
            <div className="ProductCurt__right__cartTT__btn">
              <div className="ProductCurt__right__cartTT__btn__sub">
                <p className="ProductCurt__right__cartTT__btn__sub__i">Subtotals:</p>
                <p className="ProductCurt__right__cartTT__btn__sub__p">£219.00</p>
              </div>
              <div className="ProductCurt__right__cartTT__btn__tot">
                <p className="ProductCurt__right__cartTT__btn__tot__i">Totals:</p>
                <p className="ProductCurt__right__cartTT__btn__tot__p">£325.00</p>
              </div>
              <div className="ProductCurt__right__cartTT__btn__ckb">
                <input className="ProductCurt__right__cartTT__btn__ckb__c" type={"checkbox"}></input>
                <p className="ProductCurt__right__cartTT__btn__ckb__p">Shipping & taxes calculated at checkout</p>
              </div>
              <div className="ProductCurt__right__cartTT__btn__btcl">
                <button className="ProductCurt__right__cartTT__btn__btcl__bt">Proceed To Checkout</button>
              </div>
            </div>
          </div>
          <div className="ProductCurt__right__calS">
            <h className="ProductCurt__right__calS__name">Calculate Shopping</h>
            <div className="ProductCurt__right__calS__btn">
              <Label/>
              <button className="ProductCurt__right__calS__btn__btcl">Calculate Shiping</button>
            </div>
          </div>
        </div>
      </div>
    );
}
