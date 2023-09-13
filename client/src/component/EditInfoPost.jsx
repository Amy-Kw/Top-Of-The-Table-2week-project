// this component handles the editing of a post
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createInfoPost } from "../API/info";
import { updateInfoPost } from "../API/info";
import { fetchAllInfo } from "../API/info";



export default function CreateInfoPost({setAllInfo}) {
// export default function CreateInfoPost(info_id, newGametitle, newTheme, newYear, newExpansions) {
	const [newGametitle, setNewGametitle] = useState("");
	const [newTheme, setNewTheme] = useState("");
  const [newYear, setNewYear] = useState("");
  const [newExpansions, setNewExpansions] = useState(false);//if I put false here do it make it into a boolean?how can I make this into a t/f
  const [submitData, setSubmitData] = useState(null);
  const [error, setError] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        async function createThePost() {
            const newPost = {
                newGametitle,
                newTheme,
                newYear,
                newExpansions
            };
            const result = await createInfoPost(newGametitle, newTheme, newYear, newExpansions); //
            const info = await fetchAllInfo();
            console.log(result)
            console.log(info)
            setNewGametitle("");
            setNewTheme("");
            setNewYear("");
            setNewExpansions("");
            setAllInfo(info)
            return result;
        }
        createThePost();

    };
 


    return(
        <>
            <form onSubmit={submitHandler}>
                <input placeholder="gametitle" value={newGametitle} onChange={(e) => setNewGametitle(e.target.value)} />
                <input placeholder="theme" value={newTheme} onChange={(e) => setNewTheme(e.target.value)} />
                <input placeholder="year" value={newYear} onChange={(e) => setNewYear(e.target.value)} />
                <input placeholder="expansion" value={newExpansions} onChange={(e) => setNewExpansions(e.target.value)} />
                <button type="submit">Create Post</button>
            </form>
        </>
    );
}

                //<input type='checkbox' placeholder="expansion" value={newExpansions} onChange={(e) => setNewExpansions(e.target.checked)} /> 








































  
// export default function CreatingInfoPost(event) {
// 	const [newGametitle, setNewGametitle] = useState("");
// 	const [newTheme, setNewTheme] = useState("");
//   const [newYear, setNewYear] = useState("");
//   const [newExpansions, setNewExpansions] = useState(false);//if I put false here do it make it into a boolean?how can I make this into a t/f
//   const [submitData, setSubmitData] = useState(null);
//   const [error, setError] = useState(null);
// 	// const [newRatelineid, setNewRatelineid] = useState("");
// 	// const [newListlineid, setNewListlineid] = useState("");

//   const navigate = useNavigate();


//   // useEffect(() => {
//   //   console.log("edit/post function starting");
//   // }, [navigate]);


//     async function handleSubmit(event) {
//       console.log("edit/post function starting");
//         event.preventDefault();
//         try {
//             const result = await createInfoPost( newGametitle, newTheme, newYear, newExpansions);
//             setSubmitData(CreatingInfoPost); //<check this how?
//             console.log({ newGametitle });
//             setNewGametitle("");
//             alert("Created a new info post!")
//             navigate("/info");
//           } catch (error) {
//             console.error(error);
//             setError("Failed to create a new info post");
//           }
//         }
//         return (
//             <>
//               <div className="creatingpost">
//                 <h1 className="infopostTitle">Create a Post</h1>
//                 <form className="infoPostForm" onSubmit={handleSubmit}>
//                   {error && <p>{error}</p>}
//                   <div>
//                     <label>
//                       <b>Borad Game Title: </b>
//                     </label>
//                     <input
//                       type="text"
//                       name="newGametitle"
//                       required
//                       value={newGametitle}
//                       onChange={(event) => setNewGametitle(event.target.value)}
//                     />
//                     <br />
//                     <label className="theme">
//                       <b>Theme: </b>
//                     </label>
//                     <input
//                       type="text"
//                       name="newTheme"
//                       required
//                       value={newTheme}
//                       onChange={(event) => setNewTheme(event.target.value)}
//                     />
//                     <br />
//                     <label className="year">
//                       <b>Year: </b>
//                     </label>
//                     <input
//                       type="text"
//                       name="newYear"
//                       required
//                       value={newYear}
//                       onChange={(event) => setNewYear(event.target.value)}
//                     />
//                     <br />
//                     <label>
//                       <b>Expansions: </b>
//                     </label>
//                     <input
//                       type="text"
//                       name="newExpansions"
//                       required
//                       value={newExpansions}
//                       onChange={(event) => setNewExpansions(event.target.value)}
//                     />
//                     <br />
//                     <br />
//                   </div>
//                   <button className="newInfoPostButton">CREATE POST</button>
//                 </form>
//               </div>
//             </>
//           );
//         }



