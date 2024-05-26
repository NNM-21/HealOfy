import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { PostCard } from "../Components/PostCard";

 export const AllPost = () => {
    const [allPosts, setAllPosts] = useState([]);

    async function postyy(){
        const response = await axios.get(`${BACKEND_URL}/api/posts/allPosts`);
        setAllPosts(response.data.content);
    }

    useEffect(() => {
        postyy();
    },[]);

    return(
        <>
        {allPosts.map((onePost,index)=>{
            <li key = {index} >
                <div>
                    <PostCard  title={onePost.title} content={onePost.content} createdAt={onePost.createdAt} id={onePost.id}/>
                </div>

            </li>
        })}

        </>
    )


 }