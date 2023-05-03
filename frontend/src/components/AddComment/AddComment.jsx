import React from "react";
import style from './AddComment.css'

const ReviewDisplay = () => {
    return (
        <div className="comment-form" style={ style }>
            <form>
            <div class="form-group">
                <label for="exampleFormControlInput1" className="content">Username</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1" className="content">Rate</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1" className="content" >Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add reviwe here..."></textarea>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-success" >Success</button>
            </div>
        </form>
    </div>
    )
}

export default ReviewDisplay