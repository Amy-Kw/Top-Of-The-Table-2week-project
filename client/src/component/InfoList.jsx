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
      console.log('info from line 16 on infoList file', info);
      return info;
    }
    fetchData();
  },[]);


console.log(allInfo)

  

    return(
        <>
            { allInfo.map((info) => {

                return <InfoPost key={info.info_id} info={info} setAllInfo={setAllInfo}/>
                

                
            }) }
            
        </>
    );
}

//Info bcame info - in the allmap