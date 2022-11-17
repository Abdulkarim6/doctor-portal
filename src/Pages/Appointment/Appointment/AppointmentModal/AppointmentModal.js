import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const AppointmentModal = ({ treatment, setTreatment, selectedDate }) => {
    const { user } = useContext(AuthContext)
    //treatment is just another name of  appointmentOptions with name, slots, _id
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [2,4,5].map((value, index))
        const booking = {
            appointmentData: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone
        }

        fetch('https://doctor-portal-server-two.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Cinfirmed')
                }
                console.log(data);
                setTreatment(null)
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full  borderd " />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full borderd" disabled />
                        <input name='email' type="text" defaultValue={user?.email} placeholder="Email Address" className="input w-full borderd" disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full borderd" />
                        <br />
                        <input type="submit" value="Submit" className='btn btn-accent ' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;