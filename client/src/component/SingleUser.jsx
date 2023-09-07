
import React, { useState, useEffect } from "react";
import { fetchAllUsers, fetchSingleUser } from "../API/users";
import { useParams } from "react-router-dom";

export default function SingleUser() {
    const [singleUser, setSingleUser] = useState({});
    const {id} =useParams()


    useEffect(() => {
      async function fetchData() {
        const user = await fetchSingleUser(id);
        setSingleUser(user);
        console.log(user);
        return user;
      }
      fetchData();
    },[]);

    return(
        <div>
            <p>
                {singleUser.firstname} <br></br>
                {singleUser.Lastname} <br></br>
                {singleUser.username} <br></br>
                {/* {singleInfo.ratelineId} */}
                

            </p>
        </div>
    )
}