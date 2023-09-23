
const Shimmer=()=>{
    return(
        <div className="restaurant-container">
            {
                Array(10).fill("").map(()=><div className="restaurant-card"></div>)
            }
        </div>
    )
}

export default Shimmer;