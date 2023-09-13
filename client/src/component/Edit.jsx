
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateInfoPost } from "../API/info";


export default function UpdatePostedInfoPost(info) {
// export default function CreateInfoPost(info_id, newGametitle, newTheme, newYear, newExpansions) {
  const [newGametitle, setNewGametitle] = useState("");
  const [newTheme, setNewTheme] = useState("");
  const [newYear, setNewYear] = useState("");
  const [infoId, setInfo_Id] = useState("");
  const [newExpansions, setNewExpansions] = useState(false);
//   const [submitData, setSubmitData] = useState(null);
//   const [error, setError] = useState(null);
 console.log('egg', info)
     const submitHandler = async (e) => {
        e.preventDefault();
        // setInfo_Id(props.info_id)
        const info_id=info.infoId

        console.log('this string here', infoId)
        try {
            async function editInfoPost(infoId) {
                // const updateInfoPost = { newGametitle, newTheme, newYear, newExpansions } };
                console.log("top of edit post") //< this works
                console.log('this HERE', infoId)
                const SubmitTheInfoPost = { post: { newGametitle, newTheme, newYear, newExpansions, infoId } };
                const editPost = await updateInfoPost(info.infoId, SubmitTheInfoPost);  //<wrong here why not a function - the stopage
                console.log( "edit post function?")
                setNewGametitle("");
                setNewTheme("");
                setNewYear("");
                setNewExpansions("");
                setInfo_Id("");
                setAllInfo(info)
                return editPost;
            }
            editInfoPost();
    
            
        } catch (error) {
            console.error(error)
            
        }
        
    };
 

    return(
        <>
            <form onSubmit={submitHandler}>
                <input placeholder="gametitle" value={newGametitle} onChange={(e) => setNewGametitle(e.target.value)} />
                <input placeholder="theme" value={newTheme} onChange={(e) => setNewTheme(e.target.value)} />
                <input placeholder="year" value={newYear} onChange={(e) => setNewYear(e.target.value)} />
                <input placeholder="expansion" value={newExpansions} onChange={(e) => setNewExpansions(e.target.value)} />
                <button type="submit">Update</button>
            </form>
        </>
    );
    }
   
   
   