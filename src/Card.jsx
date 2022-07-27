import React from "react"
import star from './img/star.png'

function Card(props) {
    let badgeText
    if(props.item.openSpots === 0) {
        badgeText = 'OUT OF STOCK'
    } else if(props.item.location == "Online") {
        badgeText = 'ONLINE'
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`./src/img/${props.item.coverImg}`} className="card-image" />
            <div className="card-stats">
                <img src={star} className='card-star' />
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) • </span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p>From ${props.item.price} / person</p>
        </div>
    )
}

export default Card