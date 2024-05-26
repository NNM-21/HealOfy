import { useState } from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp'
import { DoctorDashboard } from './Pages/DoctorDashboard'
import { Sample } from './Pages/Sample'
import {Post} from './Pages/Post'
import { AllPatient } from './Pages/AllPatient'
import { Appointments } from './Pages/Appointments'
import { PatientInfo } from './Pages/PatientInfo'
import { AdminDashboard } from './Pages/AdminDashboard'
import { ModeratorDashboard } from './Pages/ModeratorDashboard'
import { Role } from './Pages/Role'
import { DoctorProfileCard } from './Components/DoctorProfileCard'
import { PendingDocRequest } from './Pages/PendingDocRequest'



function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>

            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/doctordashboard' element={<DoctorDashboard/>}></Route>
            <Route path='/sample' element={<Sample/>}></Route>
            <Route path='/post' element={<Post/>}></Route>
            <Route path='/allPatient' element={<AllPatient/>}></Route>
            <Route path='/appointments' element={<Appointments/>}></Route>

            <Route path='/patientInfo' element={<PatientInfo/>}></Route>

            <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
            <Route path='/moderatordashboard' element={<ModeratorDashboard/>}></Route>
            <Route path='/role' element={<Role/>}></Route>
            <Route path='/doctorProfile/:doctorname' element={<DoctorProfileCard/>}></Route>
            <Route path='/pendingdocRequest' element={<PendingDocRequest/>}></Route>


         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
