 import { Link } from "react-router-dom";
import { DoctorProfileCard } from "./DoctorProfileCard";
 export const PendingDocRequestCard = ({doctorName}) => {
   
    return(

<div>
    <div className="flex justify-center bg-teal-50  ">

   <Link to={`/doctorProfile`}>
        <div className="flex p-4 border-b   border-slate-200 pb-4 w-full max-w-screen-md cursor-pointer bg-teal-400 rounded-3xl mt-2">
            <div className="flex flex-col  justify-center">
                <Avatar name={"Aparna"} />
                
                {/* <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    11 Apr 24
                </div> */}
            </div>
            <div></div>
            <div className="text-xl flex flex-col justify-center text-2xl font-bold  pl-2">
                {doctorName}
            </div>
            <div className="text-md font-thin flex text-base flex-col justify-center pl-1 pt-1 mr-10">
                (MS,University)
            </div>
            <div className="flex justify-between text-center mt-4 ml-4"> 
                   <div>
                       <button type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Approve</button>
                    </div>

                    

                    <div>
                    <button type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Decline</button>
                    </div>
              

            </div>
            
        </div>
    </Link>
    </div>
   </div>
)}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({ name, size = "small" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}
    
