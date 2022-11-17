import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from '../Appointment/AppointmentModal/AppointmentModal';
import AppointmentOption from './AppointmentOption';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
     
    //tantaskQuery
    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('https://doctor-portal-server-two.vercel.app/appointmentOptions')
            .then(res => res.json())

        //another option
        // queryFn: async () => {
        //     const res = await fetch('https://doctor-portal-server-two.vercel.app/appointmentOptions')
        //     const data = await res.json()
        //     return data;
        // }
    })

    // useEffect(() => {
    //     fetch('https://doctor-portal-server-two.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <div>
            <h4 className="text-3xl font-bold text-secondary text-center">Available Appointments on {format(selectedDate, 'PP')}</h4>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6 my-6'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <AppointmentModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointment;