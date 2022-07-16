import { useNavigate } from "react-router-dom";

function ErrorContent(){
    const navigate=useNavigate();
    return(
        <>
        <div className="errorContent">
            <div className="errorContent__image">
            <img className="errorContent__image__oop1" src="./images/Group 123.svg" alt=""></img>
            <img className="errorContent__image__oop" src="./images/Group 196.png" alt=""></img>
            </div>
            
            <button onClick={()=>navigate("/")}>Back To Home</button>
        </div>
        </>
    )
}
export default ErrorContent;