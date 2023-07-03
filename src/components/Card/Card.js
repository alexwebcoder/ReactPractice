
const Card = ({item}) => {
    // console.log({openSpots, key});
    // console.log(props);
     
    let  badgeText;
    if (item.openSpots === 0) {
        item.badgeText = 'SOLD OUT'
    } else if (item.location === 'Online') {
        item.badgeText = 'ONLINE'
    }

    return (
        <div className="card">
            {item.badgeText && <div className="card-badge">{item.badgeText}</div>}
            <figure><img className="card-image" src={`../images/${item.coverImg}`} alt="image of whoever"/></figure>
            <figure><img className="card-star" src="./star.png" alt="image of star" width="20px"/><figcaption className="gray">{item.stats.rating} ({item.stats.reviewCount})- {item.location}</figcaption></figure>
            <p className="card-title">{item.title}</p>
            <p className="card-price"><span className="bold">${item.price}</span>/ person</p>
        </div>
    )
}

export default Card;