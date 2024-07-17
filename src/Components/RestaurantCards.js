import { CDN_URL } from "../utils/constants"

// Restaurant Card Component 

const RestaurantCards = ({resData}) =>{
    const {cloudinaryImageId,name, avgRating, cuisines, costForTwo, locality } = resData?.info
    return(
        <>
            <div className="card">
                <div className="card__image">
                    <img src={CDN_URL + cloudinaryImageId}/>
                </div>
                <div className="content">
                    <div className="card-title">
                        <h1>{name}</h1>
                    </div>
                    <div className="card-text">
                        <div>
                            <span>{avgRating}</span>
                            <span>{costForTwo}</span>
                        </div>
                        <p>{cuisines.join(' | ')}</p>
                        <p>{locality}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


// Higher Order Component 

// input => RestaurantCard Component => return => RestaurantCardPromoted

// export const withPromotedLabel = (RestaurantCards)=>{
//     return(props)=>{
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCards {...props}/>
//             </div>
//         )
//     }
// }

// export const withofferLabel = (RestaurantCards)=>{
//     return(props)=>{
//         return(
//             <div>
//                 <p>Offer</p>
//                 <RestaurantCards {...props}/>
//             </div>
//         )
//     }
// }


export default RestaurantCards