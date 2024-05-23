import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import TodoListSelector from '../Content/TodoListOption';
import lists from './../../Data/Lists.json';
import { set, get } from '../../Data/SaveLocalStorage'; 

interface List {
  name: string;
  cards: {
    todo: Array<{ title: string; text: Array<{ option: string }> }>;
    done: Array<{ title: string; text: Array<{ option: string }> }>;
  };
}

const HomePage: React.FC = () => {
  const [loadedLists, setLoadedLists] = useState<List[]>([]);

  useEffect(() => {
    const savedLists = get<List[]>('savedLists');
    if (savedLists) {
      setLoadedLists(savedLists);
    } else {
      setLoadedLists(lists);
    }
  }, []);

  const saveChanges = () => {
    set('savedLists', loadedLists);
  };

  return (
    <div className="home-page">
      <h2 className="home-page__title">My todo lists:</h2>
      <div className="home-page__options--container">
        {loadedLists.map((list) => (
          <TodoListSelector
            key={list.name}
            listName={list.name}
            className="home-page__option"
          />
        ))}
      </div>
      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

export default HomePage;
