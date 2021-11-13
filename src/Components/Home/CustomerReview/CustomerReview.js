import React, { useEffect, useState } from 'react';

import { RatingView } from 'react-simple-star-rating'
import './CReview.css'
const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://hidden-inlet-96106.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container mt-5 ">
            <h1>Customer <span className="text-success mb-5">Review</span> </h1>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    reviews.map(review =>
                        <div className="col">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front pt-5">

                                        <RatingView ratingValue={review.rating} /* RatingView Props */ />
                                        <p>{review.review}</p>
                                    </div>
                                    <div className="flip-card-back">
                                        <img src={review.img} alt="Avatar" style={{ width: "100px", height: "100px", borderRadius: "50%" }} /> <br />

                                        <RatingView ratingValue={review.rating} /* RatingView Props */ />
                                        <h1>{review.displayName}</h1>
                                        <p>Architect & Engineer</p>
                                        <p>{review.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CustomerReview;