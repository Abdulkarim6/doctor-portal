import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <section className='my-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl font-bold text-primary">Testimonial</h4>
                    <h2 className="text-4xl font-semibold">What Our Patients Says</h2>
                </div>
                <div>
                    <figure>
                        <img src={quote} className='w-24 lg:w-48' alt="" />
                    </figure>
                </div>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-6'>
                {
                    reviews.map(userReview => <Testimonial
                        key={userReview.id}
                        userReview={userReview}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;