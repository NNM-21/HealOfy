import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import { BACKEND_URL } from "../config";

export const Login = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState({
        email: "",
        password: ""
    });

    function sendRequest(){
        navigate("/doctordashboard");
    }

   
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/auth/authenticate`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            if(postInputs.email[0] === 'a'){
                navigate("/doctordashboard");
            }
            else if(postInputs.email[0] === 'n'){
                navigate("/admindashboard");
            }
            else{
                navigate("/moderatordashboard");
            }
           
        } catch(e) {
            alert("Error while signing up")
            // alert the user here that the request failed
        }
    }
    

    return <div className="h-screen flex justify-center flex-col bg-teal-50">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold text-center text-teal-600">
                        Sign In
                    </div>
                    <div className="text-slate-500">
                        Don't have an account?
                        <Link className="pl-2 underline text-teal-400" to={"/signup"}>
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className="pt-8">
                    
                    <LabelledInput label="Email" placeholder="abc@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    {/* <button onClick={sendRequest} type="button" className="mt-8 w-full text-white  bg-teal-600 hover:teal-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-700 dark:border-teal-700">Sign in</button> */}

                    <button onClick={sendRequest} type="button" className="mt-8 w-full text-white  bg-teal-600 hover:teal-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-700 dark:border-teal-700">Sign in</button>
                </div>
            </div>
        </div>
    </div>
}



function LabelledInput({ label, placeholder, onChange , type}) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400 focus:border-teal-400 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}
