import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './GameDisplay.css'
import ReviewDisplay from "../ReviewDisplay/ReviewDisplay";
import AddComment from '../AddComment/AddComment'

const GameDisplay = (props) => {
    const [gameState, setGameState] = useState() //First one is the state, second one is a function to set the state
    const [reviewState, setReviewState] = useState([])
    const { game_id } = useParams()

    const addReview = (newReview) => {
        setReviewState([...reviewState, newReview])
    }

    useEffect(() => {
        const url = `http://localhost:3000/game/${game_id}`
        fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        }).then((result) => {
            result.json().then((resolvedResult) => setGameState(resolvedResult))
        })
    }, [])

    useEffect(() => {
        console.log("making the request")
        const url = `http://localhost:3000/review/game/${game_id}`
        fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        }).then((result) => {
            result.json().then((resolvedResult) => setReviewState(resolvedResult))
        })
    }, [])

    console.log(reviewState)

    if (gameState == undefined) {
        return <div></div>
    }
    return (
        <div className="game-grid-container" style={ style }>
            <div className="game-grid-1">
                <h1 className="display-title">{ gameState.title }</h1>
            </div>

            <div className="game-grid-2">
                <img variant="top" src={ gameState.art } className="game-art-display"/>
            </div>

            <div className="game-grid-3">
                <div className="game-container-info">
                    <h4 className="display-title">{ gameState.title }</h4>
                    <p className="content">{ gameState.description }</p>
                    <p className="content">RATING: { gameState.average_score }/10</p>
                    <p className="content">RELEASE DATE: { gameState.year } </p>
                </div>
            </div>

            <div className="game-grid-4">
                <h4 className="add-review">HAVE A REVIEW?</h4>
                <AddComment game_id={ game_id } addReview={ addReview }/>
            </div>
            
            <div className="game-grid-5">
                <h4 className="display-review">REVIEWS</h4>
                <div className="reviews-container">
                    < ReviewDisplay reviews={ reviewState }/>
                </div>
            </div>
        </div>
    )
}

export default GameDisplay