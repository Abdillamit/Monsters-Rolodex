import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

interface Monster {
  name: string;
}

interface AppState {
  monsters: Monster[];
  searchField: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      })
      .catch((error) => console.error('Error fetching users:', error));
  }

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({ searchField });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <SearchBox
          className="search-box"
          type='search'
          placeholder="Search Monster"
          onChangeHandler={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
        <button>Update</button>
      </div>
    );
  }
}

export default App;
