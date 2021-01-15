import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

      this.state = {
        monsters: [],
        SearchField: ''
      };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters: users}))
  }

  onSearchChange = s => {
     this.setState({ SearchField: s.target.value });
  }

  render() {
    const { monsters, SearchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>RobotMonsters</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;