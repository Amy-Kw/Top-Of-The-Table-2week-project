
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
                {singleInfo.gametitle}
                {singleInfo.theme}
                {singleInfo.year}
                {singleInfo.expansions}

            </p>
        </div>
    )
}