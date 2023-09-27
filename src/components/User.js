import { useState } from "react";

const User=({name,mail})=>{
    const [count,setCount]=useState(0);
    return(
        <div className="user-card">
            <h2>{name} - {count}</h2>
            <h2>{mail}</h2>
            <h4>Location : Delhi</h4>
            <button onClick={()=>{setCount(count+1)}}>Click Me!</button>
        </div>
    )
}

export default User;