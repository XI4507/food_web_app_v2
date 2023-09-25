import { useRouteError } from "react-router-dom";

const Error=()=>{
    const {status,statusText}=useRouteError();
    return(
        <div>
           <h1>{status} : {statusText}</h1>
           <hr/>
           <h4>OOPS.... Something Went Wrong</h4>
           <p>Page You are Looking is not available. Please move to some another page</p>
        </div>
    )
}

export default Error;