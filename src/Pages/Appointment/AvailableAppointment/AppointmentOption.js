import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : 'space'} Available</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;