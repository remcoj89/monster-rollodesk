import { Component } from 'react';

class cardList extends Component {
    render() {
        const { monsters } = this.props

        return monsters.map((monster) => {
           return (
            <div key={monster.id}>
                <h1>{monster.name}</h1>
                <h4>{monster.username}</h4>
                <p>{monster.email}</p>
            </div>
           )   
        })
    }
}

export default cardList