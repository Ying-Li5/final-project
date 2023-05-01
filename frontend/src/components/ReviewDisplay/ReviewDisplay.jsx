import React from "react";
import style from './ReviewDisplay.css'
import MockImage from '../../public/images/Alax.jpg'

const ReviewDisplay = (props) => {
    return (
        <div className="review-container" style={ style }>
            <div className="reviewer-container">
                <div className="reviewer">
                    <img src={ MockImage } alt="Avatar" class='avatar' />
                    <div className="reviewer-info">
                        <p className="content">REVIEWER NAME</p>
                        <p className="content">REVIEWER SCORE</p>
                    </div> 
                </div>

                <div className="reviewer-description">
                    <p className="content">REVIEWER DESCRIPTION</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewDisplay