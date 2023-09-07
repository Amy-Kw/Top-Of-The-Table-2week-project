import React, {useState, useEffect} from "react";
import { fetchAllUsers } from "../API/users";
import ShowUsers from "./Users";


export default function UsersList() {

      // useState
  const [allUsers, setAllUsers] = useState([]);

  // useEffect
  useEffect(() => {
    async function fetchData() {
      const users = await fetchAllUsers();
      setAllUsers(users);
      console.log(users);
      return users;
    }
    fetchData();
  },[]);

    return(
        <>
            { allUsers.map((users) => {
                return <ShowUsers key={users.users_id} users={users} />
                
            }) }
        </>
    );
}

