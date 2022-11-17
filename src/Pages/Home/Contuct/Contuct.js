import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contuct = () => {
    return (
        <div
            style={{
                background: `url(${appointment})`,
                // backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className="hero">
            <div className="hero-content w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center">
                    <div className="card-body">
                        <p className="py-6">Contact Us</p>
                        <h4 className="text-xl font-bold text-primary">Stay connected with us</h4>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" name="" className="input input-bordered" placeholder='Subject' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <textarea className="textarea input input-bordered" placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contuct;