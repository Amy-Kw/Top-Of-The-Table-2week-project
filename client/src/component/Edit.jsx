
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateInfoPost } from "../API/info";


export default function UpdatePostedInfoPost({info, setSingleInfo}) { //in here, included the setSingleInfo
  const [newGametitle, setNewGametitle] = useState("");
  const [newTheme, setNewTheme] = useState("");
  const [newYear, setNewYear] = useState("");
  const [infoId, setInfo_Id] = useState("");
  const [newExpansions, setNewExpansions] = useState(false);
 console.log('info from line 16 from edit file', info)
     const submitHandler = async (e) => {
        e.preventDefault();
        const info_id=info.infoId

        console.log('inforId from line22 from edit file', infoId)
        try {
            async function editInfoPost(infoId) {
                // const updateInfoPost = { newGametitle, newTheme, newYear, newExpansions } };
                console.log("top of edit post")
                console.log('infoId line27 from edit file', infoId)
                // const SubmitTheInfoPost = { post: { newGametitle, newTheme, newYear, newExpansions, infoId } };
                const editPost = await updateInfoPost(newGametitle, newTheme, newYear, newExpansions, info.info_id);  //this part got correct to be newGametitle, newTheme, newYear, newExpansions, info.info_id bc SubmitTheInfoPost did not work, it needed to match the API way of how its written. Then for the info.info_id is from that 
                console.log( "edit post function?")
                setNewGametitle("");
                setNewTheme("");
                setNewYear("");
                setNewExpansions("");
                setInfo_Id("");
                setSingleInfo(editPost) //updated the setAllInfoPost to setSinglePost
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
   
   
   