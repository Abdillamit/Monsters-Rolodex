import { Component, ReactNode } from 'react';
import './card-list.style.css';

interface Monster {
  name: string;
  id: number;
  email: string;
}

interface CardListProps {
  monsters: Monster[];
}

class CardList extends Component<CardListProps> {
  render(): ReactNode {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className='card-container' key={id}>
              <img src={`https://robohash.org/${id}?set=set2`} alt={`monster ${id}`} />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>

);
        })}
      </div>
    );
  }
}

export default CardList;
