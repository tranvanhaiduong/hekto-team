export default function RegisterAccountContact(){
    return(
        <div className="RegisterAccountContact">
            <div className="RegisterAccountContact__contact">
                <div className="RegisterAccountContact__contact__cnp">
                    <p className="RegisterAccountContact__contact__cnp__cof">Contact Information</p>
                    <p className="RegisterAccountContact__contact__cnp__alr">Already have an account?</p>
                    <a href="/login" className="RegisterAccountContact__contact__cnp__login">Log in</a>   
                </div>
                <div className="RegisterAccountContact__contact__coi   form__group">
                    <input type="input" className="form__field" placeholder="Email or mobile phone number" />
                </div>
                <div className="RegisterAccountContact__contact__cheb">
                    <input className="RegisterAccountContact__contact__cheb__c" type={"checkbox"}></input>
                    <p className="RegisterAccountContact__contact__cheb__k">Keep me up to date on news and excluive offers</p>
                </div>
            </div>
            <div className="RegisterAccountContact__shipping">
                <p className="RegisterAccountContact__shipping__n">Shipping address</p>
                <div className="RegisterAccountContact__shipping__flname">
                    <div className="RegisterAccountContact__shipping__flname__fname form__group">
                        <input type="input" className="form__field" placeholder="First name (optional)" />
                    </div>
                    <div className="RegisterAccountContact__shipping__flname__lname form__group">
                        <input type="input" className="form__field" placeholder="Last name" />
                    </div>
                </div>
                <div className="RegisterAccountContact__shipping__address form__group" >
                    <input type="input" className="form__field" placeholder="Address" />
                </div>
                <div className="RegisterAccountContact__shipping__appaetnentment form__group">
                    <input type="input" className="form__field" placeholder="Appaetnentment,suit,e.t.c (optinal)" />
                </div>
                <div className="RegisterAccountContact__shipping__city form__group">
                    <input type="input" className="form__field" placeholder="City" />
                </div>
                <div className="RegisterAccountContact__shipping__bp">
                    <div className="RegisterAccountContact__shipping__bp__ba form__group">
                        <input type="input" className="form__field" placeholder="Bangladesh" />
                    </div>
                    <div className="RegisterAccountContact__shipping__bp__pc form__group">
                        <input type="input" className="form__field" placeholder="Postal Code" />
                    </div>
                </div>
            </div>  
            <button className="RegisterAccountContact__btn">Continue Shipping</button>
        </div>
    );
}