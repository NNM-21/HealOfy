import { useEffect, useState } from "react";
import { AppointmentCard } from "../Components/AppointmentCard";
import axios from "axios";

export const Appointments = () => {
    const [appointments,setAppointments] = useState([]);

    async function fetching(){
        const response = await axios.get();
        setAppointments(response.data);
    }

    useEffect(()=>{
        fetching();
    },[])
    
    return(
        <>
            {appointments.map((appointment,index)=>{
                return(
                    <div key={index}>
                        <AppointmentCard firstName={appointment.firstName} lastName={appointment.lastName} age={appointment.age} email={appointment.email} severity={appointment.severity} createdAt={appointment.createdAt}/>
                    </div>
                )
            })}
            
        </>
    )
}