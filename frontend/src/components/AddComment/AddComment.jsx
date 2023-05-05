import React, { useState } from "react";
import style from './AddComment.css'

const AddComment = (props) => {
    const { game_id, addReview } = props
    const [authorState, setAuthorState] = useState('')
    const [scoreState, setScoreState ] = useState('1')
    const [titleState, setTitleState ] = useState('')
    const [descriptionState, setDescriptionState ] = useState('')

    function submitReview() {
        const obj = {
            author_id: authorState,
            score: scoreState,
            game_id: game_id,
            title: titleState,
            content: descriptionState,
            createdAt: new Date()
        }

        fetch(`http://localhost:3000/review`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obj),
        }).then((result) => {
            result.json().then((newReview) => addReview(newReview))
        })
    }

    return (
        <div className="comment-form" style={ style }>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1" className="form-content">Author</label>
                    <input 
                    type="author" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Insert author name..."
                    onChange={ (event) => setAuthorState(event.target.value) }
                    required />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlSelect1" className="form-content">Rate</label>
                    <select 
                    class="form-control" 
                    id="exampleFormControlSelect1" 
                    onChange={ (event) => {
                        console.log(event.target.value)
                        setScoreState(event.target.value)
                    } }
                    required >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1" className="form-content">Title</label>
                    <textarea 
                    class="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="1" 
                    placeholder="Insert review title..."
                    onChange={ (event) => setTitleState(event.target.value) } />
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1" className="form-content">Description</label>
                    <textarea 
                    class="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3" 
                    placeholder="Insert review here..."
                    onChange={ (event) => setDescriptionState(event.target.value) } 
                    required />
                </div>
            </form>

            <div class="form-group-button">
                <button type="button" onClick={ submitReview }>Submit</button>
            </div>
        </div>
    )
}

export default AddComment