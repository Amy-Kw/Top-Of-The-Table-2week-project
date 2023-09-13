import React, { useState, useEffect } from "react";
import { fetchSingleInfo } from "../API/info";
import { useParams } from "react-router-dom";
import UpdatePostedInfoPost from "./Edit";


export default function SingleInfoPost( { info } ) {
    const [singleInfo, setSingleInfo] = useState({});
    const {id} =useParams()
 console.log('info', info)
//  console.log('does this work', info.infiId)


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



              <UpdatePostedInfoPost info={info}/>


        </div>
    );
}




// export default function InfoPost({ info, setAllInfo }) {

//   return(
//     <div>

//     <Link to={`/info/${info.info_id}`} >
    
//       <p className="gametitle"> {info.gametitle}</p>



//     </Link>
    
//             <DeleteInfoPost info_id={info.info_id}/>  
//             <CreateInfoPost setAllInfo={setAllInfo}/>
//             <SingleInfoPost setAllInfo={setAllInfo}/>

            
            
            

      
//     </div>
//   );
// }