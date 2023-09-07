import { Link } from "react-router-dom";
//react - need cap for 1st letter

//the `/users/${users.users_id}` is /what you named the url(whatever)(coming from navbar/api)/${pulling the table name of the seedData(ex: info table, rate table, list table..).name of the column you are pulling the data from(ex: gametitle,ratelineid..)}

export default function ShowUsers({ users }) {

  return(
    <div className="usernamedisplay">

    <Link to={`/users/${users.users_id}`} >
    
      <p className="link"> {users.username}</p>

    </Link>
    

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
