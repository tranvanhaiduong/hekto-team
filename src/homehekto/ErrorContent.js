import { useNavigate } from "react-router-dom";

function ErrorContent(){
    const navigate=useNavigate();
    return(
        <>
        <div className="errorContent">
            <img src="./images/Group 123.svg" alt=""></img>
            <button onClick={()=>navigate("/")}>Back To Home</button>
        </div>
        </>
    )
}
export default ErrorContent;