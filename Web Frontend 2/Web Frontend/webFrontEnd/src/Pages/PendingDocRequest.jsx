import { PendingDocRequestCard } from "../Components/PendingDocRequestCard";
export const PendingDocRequest = () => {
    return(
        <div>
        <PendingDocRequestCard doctorName={"Aparna"}/>
        </div>
    )
}


{/*

import { PendingDocRequestCard } from "../Components/PendingDocRequestCard";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState , useEffect} from "react"

export const PendingDocRequest = () => {
 const navigate = useNavigate();
 const [requests , setRequests] = useState([]);

 asynce function sotyy(){
    const response = await axios.get();
    setRequests(response.data);

 }

 useEffect(()=>{
    sotyy();
 },[requests]);

    return(
        {requesrts.map((oneRequest,index)=>{
            return(
                <div key={index} >
                  <PendingDocRequestCard doctorName={oneRequest.firstName}/>
                </div>
            )
        });}
        
    )
}
  


*/}