import {Component} from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[],
    }

    console.log("consturctor")
  };
  
componentDidMount() {
  console.log("component did mount")
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
    .catch(err => console.log("oepss something went wrong",err))
}

  render () {
    console.log("render")
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='Search monsters' 
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase()
            const filterdMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString)
            });

            this.setState(() =>  {
              return {monsters: filterdMonsters }})
          }}/>
        { this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
