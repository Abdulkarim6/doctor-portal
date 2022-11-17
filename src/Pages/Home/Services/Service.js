import React from 'react';

const Service = ({ service }) => {
    const { name, description, img} = service;
    return (
        <div className={`card p-6 lg:card-side bg-base-100 shadow-xl`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;