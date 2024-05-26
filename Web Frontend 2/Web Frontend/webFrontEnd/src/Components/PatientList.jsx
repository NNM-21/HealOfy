import axios from "axios";
import {BACKEND_URL} from "../config";


import { useEffect, useState } from "react"

export const PatientList = () => {

  const [patientList ,setPatientList] = useState([]);
  
  async function sotty(){
    const response = await axios.get(`${BACKEND_URL}/api/allPatients`);
    setPatientList(response.data);
  }

  useEffect(()=>{
    sotty();

  },[patientList]);
  
  
    return (
      <div className="flex justify-center bg-teal-50">
      <div className="bg-teal-500  rounded-3xl p-8 w-3/4 p-5">
      <ul role="list" className="divide-y divide-gray-200">
        {patientList.map((patient,index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50 focus-cursor" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{patient.firstname} </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{patient.lastname}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{patient.age}</p>
              <p className="text-sm leading-6 text-gray-900">{patient.email}</p>
              <p className="text-sm leading-6 text-gray-900">{patient.address}</p>
             
            </div>
          </li>
        ))}
      </ul>
      </div>
      </div>
    )
  }
  