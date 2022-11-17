import React from 'react';

const Testimonial = ({ userReview }) => {
    const { name, img, review, location } = userReview;
    return (
        <div className="card w-[350px] shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="card-actions mt-5">
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;