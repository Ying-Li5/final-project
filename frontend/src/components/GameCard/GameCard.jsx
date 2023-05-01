import React from "react";
import Card from 'react-bootstrap/Card';
import style from './GameCard.css'

export const GameCard = (props) => {
    console.log(props)
    const { game } = props
    return (
        <Card className="card">
            <div className="game-card" style={ style }> 
                <Card.Img variant="top" src={ game.art } className="game-art"/>
                <Card.Body>
                    <Card.Title>{ game.title } ({ game.year })</Card.Title>
                    <Card.Text>{ game.average_score }/10</Card.Text>
                    <Card.Text>{ game.description }</Card.Text>
                </Card.Body>
            </div>
        </Card>
    )
}