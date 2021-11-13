import React, { useEffect, useState } from 'react';
import './CReview.css'
const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
     <div className="container">
            <div className="row row-cols-sm-1 row-cols-md-2">

<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" style={{ width: "300px", height: "300px" }} />
        </div>
        <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
        </div>
    </div>
</div>

</div>
     </div>
    );
};

export default CustomerReview;