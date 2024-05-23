import React from 'react'
import './Card.scss'
import Button from './../Input/Button'

interface CardProps {
  title: string
  bulletPoints: string[]
}

const Card: React.FC<CardProps> = ({ title, bulletPoints }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <ul className="card__list">
        {bulletPoints.map((point) => (
          <li key={point} className="card__list-item">
            {point}
          </li>
        ))}
      </ul>
      <Button>Edit</Button>
    </div>
  )
}

export default Card
