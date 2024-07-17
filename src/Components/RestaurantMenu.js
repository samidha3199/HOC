import { useParams } from "react-router-dom"
import Shimmer from "../Components/Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import useRestaurantMenu from "../utils/useRestaurantMenu"


const RestaurantMenu = ()=>{

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

    if(resInfo === null) return <Shimmer/>

    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info

    const {itemCards} = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card
    console.log(itemCards)

    return (
        <>

            <div className="menu">
                <h1>{name}</h1>
                <h2>{cuisines.join(" | ")}</h2>
                <p>{costForTwoMessage}</p>
                <ul>
                    {
                        itemCards.map((items)=>{
                            return(
                                <li key={items.card.info.id}>
                                    {items.card.info.name} - {"Rs."} {items.card.info.defaultPrice/100 || items.card.info.price/100}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default RestaurantMenu