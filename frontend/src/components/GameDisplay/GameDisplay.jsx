import React, { useEffect, useState } from "react";
import style from './GameDisplay.css'
import ReviewDisplay from "../ReviewDisplay/ReviewDisplay";

const GameDisplay = (props) => {
    return (
        <div className="game-grid-container" style={ style }>
            <div className="game-grid-1">
                <h1 className="content">GAME NAME</h1>
            </div>

            <div className="game-grid-2">
                <h4 className="content">GAME ART</h4>
            </div>

            <div className="game-grid-3">
                <h4 className="content">GAME NAME</h4>
                <p className="content">GAME DESCRIPTION</p>
                <p className="content">GAME RATING</p>
                <p className="content">GAME DEVELOPER</p>
                <p className="content">GAME PUBLISHER</p>
            </div>

            <div className="game-grid-4">
                <h4 className="content">GAME REVIEW</h4>
                <div className="review-container">
                    < ReviewDisplay />
                </div>
            </div>
        </div>
    )
}

export default GameDisplay