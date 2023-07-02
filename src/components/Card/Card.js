
const Card = ({img, rating, reviewCount, location, title, price, key, openSpots}) => {
    console.log({openSpots, key});
     
    let  badgeText;
    if (openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (location === 'Online') {
        badgeText = 'ONLINE'
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <figure><img className="card-image" src={`../images/${img}`} alt="image of whoever"/></figure>
            <figure><img className="card-star" src="./star.png" alt="image of star" width="20px"/><figcaption className="gray">{rating} ({reviewCount})- {location}</figcaption></figure>
            <p className="card-title">{title}</p>
            <p className="card-price"><span className="bold">${price}</span>/ person</p>
        </div>
    )
}

export default Card;