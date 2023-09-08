
import React, { useState, useEffect } from "react";
import { fetchSingleInfo } from "../API/info";
import { useParams } from "react-router-dom";

export default function SingleInfoPost() {
    const [singleInfo, setSingleInfo] = useState({});
    const {id} =useParams()


    useEffect(() => {
      async function fetchData() {
        const info = await fetchSingleInfo(id);
        setSingleInfo(info);
        console.log(info);
        return info;
      }
      fetchData();
    },[]);

    return(
        <div>
            <p>
                {singleInfo.gametitle} <br></br>
                {singleInfo.theme} <br></br>
                {singleInfo.year} <br></br>
                {singleInfo.expansions} <br></br>
                {/* {singleInfo.ratelineId} */}
                

            </p>
        </div>
    )
}