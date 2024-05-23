import React from 'react'
import './HomePage.scss'
import TodoListOption from '../Content/TodoListOption'
import lists from './../../Data/Lists.json'

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h2 className="home-page__title">My todo lists:</h2>
      <div className="home-page__options--container">
        {lists.map((list) => (
          <TodoListOption
            key={list.name}
            listName={list.name}
            className="home-page__option"
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage
