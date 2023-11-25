import { Component } from 'react';
import CardContainer from '../card-component/card.component';
import "./card-list.styles.css"

class CardList extends Component {
    render() {
        const { monsters } = this.props

        return (
        <div className="card-list">
            {monsters.map((monster) => {
                
                return (
                    <CardContainer monster={monster} />
                )
                }
            )}
        </div>
    )
    }
}

export default CardList