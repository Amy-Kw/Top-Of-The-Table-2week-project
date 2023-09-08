import React, {useState, useEffect} from "react";
import { fetchAllInfo } from "../API/info";
import InfoPost from "./InfoPosts";


export default function InfoList() {

      // useState
  const [allInfo, setAllInfo] = useState([]);

  // useEffect
  useEffect(() => {
    async function fetchData() {
      const info = await fetchAllInfo();
      setAllInfo(info);
      console.log(info);
      return info;
    }
    fetchData();
  },[]);


console.log(allInfo)

  

    return(
        <>
            { allInfo.map((Info) => {

                return <InfoPost key={Info.info_id} info={Info} setAllInfo={setAllInfo} />
                

                
            }) }
            
        </>
    );
}


