import React, { useEffect, useState } from 'react';
import reactStars from 'react-rating-stars-component';
import './CReview.css'
const alt = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrK_KKylmSo7qaUpnPenSDYwADYFMx8QUkow&usqp=CAU"
const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
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
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <reactStars
                                            count={review.rating}
                                            onChange={3}
                                            size={27}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div class="flip-card-back">
                                        <img src={review.img} alt="Avatar" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                                        <h1>John Doe</h1>

                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
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