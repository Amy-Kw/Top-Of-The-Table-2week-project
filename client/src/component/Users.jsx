import DeleteInfoPost from "./DeleteInfoPost";
import { Link } from "react-router-dom";
// import CreateInfoPost from "./EditInfoPost";
//react - need cap for 1st letter

export default function InfoPost({ info }) {

  return(
    <div>

    <Link to={`/info/${info.info_id}`} >
    
      <p> {info.gametitle}</p>
      <p> {info.theme}</p>
      <p> {info.yea}</p>
      <p> {info.expansions}</p>

    </Link>
    
      <DeleteInfoPost infoId={info.info_id}/>
      {/* <CreateInfoPost info={} */}
    </div>
  );
}




// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchAllUsers } from "../API/users";


// export default function ShowUsers() {
//     const [showusers, setShowUsers] = useState([]);
//     const [error, setError] = useState(null);
//     const [searchParam, setSearchParam] = useState("");
//     const navigate = useNavigate();

      
//         async function getAllUsers() {
//           const APIResponse = await fetchAllUsers();
//           console.log(APIResponse)
//           if (APIResponse.success) {
//             setShowUsers(APIResponse.data.showusers);
//           } else {
//             setError(APIResponse.message);
//           }
//         }
//     }
  
//     useEffect(() => {
//         fetchAllUsers();
//     }, []);

//     const visableUsersList = searchParam
//     ? showusers.filter((users) =>
//         users.username.toLowerCase().includes(searchParam)
//     )
//     : Showsers; //do I make it capital?
  
  
//   console.log(visableUsersList)
//     return (
//       <div className="AllUserNamesListHere">
//         <div className="SearchSection">
//           <label>
//             Search:{" "}
//             <input
//             type="text"
//             placeholder="search"
//             onChange={(event) => setSearchParam(event.target.value.toLowerCase())}
//             />
//           </label>
//         </div>
  
  
      
//         {visableUsersList.map((users) => {
//           return (
//             <div  key={users._id}>
//             <h3 id="post-component"> {users.firstname} </h3>
//               <p> {users.lastname} </p>
//               <p> {users.username} </p>
  
  
//             </div>
//           );
//         })}
      
//       </div>
//     )
