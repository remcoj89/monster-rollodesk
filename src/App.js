import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box-component";
import "./App.css";

const App = () => {

  const [searchField, setSearchField] = useState('');//[value, setValue]
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users)
    )
    .catch((err) => console.log("oepss something went wrong", err));
  },[])
  
    

  const onSearchChange = (event) => {
          const searchFieldString = event.target.value.toLocaleLowerCase();
          setSearchField(searchFieldString);
        }

  const filterdMonsters = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField);
        });
  

  return (
      <div className="App">

        <h1 className="app-title">Monsters Rolodex</h1>
  
        <SearchBox 
          className={'monsters-search-box'}
          onChangeHandler={onSearchChange}
          placeholder='search monsters...'
        />
          
        <CardList 
          monsters={filterdMonsters}
        />
      </div>
    );
}

// Class component
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) =>
    //     this.setState(() => {
    //       return { monsters: users };
    //     })
    //   )
    //   .catch((err) => console.log("oepss something went wrong", err));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField: searchField };
//     });
//   }

//   render() {
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this

//     const filterdMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">

//         <h1 className="app-title">Monsters Rolodex</h1>
  
//         <SearchBox 
//           className={'monsters-search-box'}
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters...'
//         />
          
//         <CardList 
//           monsters={filterdMonsters}
//         />
//       </div>
//     );
//   }
// }

export default App;
