
import "./card.styles.css"

const Card = ({monster}) => {
    const {name, id, email} = monster;

    return (
        <div className="card-container">
            <img src={`https://robohash.org/${id}?set=2&size=180x180`} alt={`monster ${id}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card