import React from 'react';
import './Card.scss';
import Button from './../Input/Button'

interface CardProps {
    title: string;
    bulletPoints: string[];
}

const Card: React.FC<CardProps> = ({ title, bulletPoints }) => {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <ul className="card-list">
                {bulletPoints.map((point, index) => (
                    <li key={index} className="card-list-item">{point}</li>
                ))}
            </ul>
            <Button>Rediger</Button>
        </div>
    );
};

export default Card;
