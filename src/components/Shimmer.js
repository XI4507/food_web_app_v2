
const Shimmer=()=>{
    return(
        <div className="restaurant-container">
            {
                Array(10).fill("").map((cards,i)=><div className="restaurant-card" key={i}></div>)
            }
        </div>
    )
}

export default Shimmer;