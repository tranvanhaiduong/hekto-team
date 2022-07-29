import faq_data from "../fake -data/fake-faq";

function ContentFAQ() {
  return (
    <div className="contentfaq">
      <div className="contentfaq__infomations">
        <h1>Generel Information</h1>
        <div className="contentfaq__infomations__all">
        {faq_data.map((data,index)=>(
          <div key={index} className="contentfaq__infomations__all__infomation">
          <div className="contentfaq__infomations__all__infomation__title">
            {data.title}
          </div>
          <div className="contentfaq__infomations__all__infomation__description">
            {data.description}
          </div>
        </div>
        ))}
        </div>
      </div>
      <div className="contentfaq__question">
        <h1>Ask a Question</h1>
        <div className="contentfaq__question__input">
          <input type="text" placeholder="Your Name *" id="input__name"></input>
          <input
            type="text"
            placeholder="Subject *"
            id="input__subject"
          ></input>
          <textarea
            placeholder="Type Your Message *"
            id="input__mess"
          ></textarea>
        </div>
        <button>Send Mail</button>
      </div>
    </div>
  );
}
export default ContentFAQ;
