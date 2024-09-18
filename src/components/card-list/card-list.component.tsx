import { Component, ReactNode } from 'react';

interface Monster {
  name: string;
}

interface CardListProps {
  monsters: Monster[];
}

class CardList extends Component<CardListProps> {
  render(): ReactNode {
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.name}>{monster.name}</h1> // Added a key prop
        ))}
      </div>
    );
  }
}

export default CardList;
