import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';
const Review = () => {
    const [rating,setRating]=useState(0)
    const {user}=useAuth()
    const [review,setReview]=useState("")
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const handleText =(e)=>{
        e.preventDefault()
        setReview(e.target.value)
    }
    const handleReview=(e)=>{
        const name= user.displayName
        const email = user.email

        const clientReview = {review,rating,name,email}
        
        console.log(clientReview)
        fetch(`http://localhost:5000/review`,{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(clientReview)
        }).then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                });
               
                setRating(0)

            }
        })
       
        e.preventDefault()

    }
    return (
        <div  className="review-container text-center  mx-auto" >
            <form action="" onSubmit={handleReview}>
            <textarea type="text" onBlur={handleText}  placeholder="Give  your review" />
        
          <div className="d-flex">
              <h5 className="mx-5">Rating</h5>
              <ReactStars
            count={5}
            onChange={ratingChanged}
            size={27}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
        />
          </div>
          <input type="submit" value="submit" />

            </form>
       
        </div>
    );
};

export default Review;