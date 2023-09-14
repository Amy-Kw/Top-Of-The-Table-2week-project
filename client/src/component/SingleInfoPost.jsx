import React, { useState, useEffect } from "react";
import { fetchSingleInfo } from "../API/info";
import { useParams } from "react-router-dom";
import UpdatePostedInfoPost from "./Edit";

//no need for the {info}!
export default function SingleInfoPost() {
    const [singleInfo, setSingleInfo] = useState({});
    const {id} =useParams()
//  console.log('info', info)
//  console.log('does this work', info.infiId)


    useEffect(() => {
      async function fetchData() {
        const info = await fetchSingleInfo(id);
        setSingleInfo(info); //setSingleInfo is renaming info so you should use setSingleInfo instead for passing thing around
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



              <UpdatePostedInfoPost info={singleInfo} setSingleInfo={setSingleInfo}/>
              


        </div>
    );
}

//<UpdatePostedInfoPost info={singleInfo} setSingleInfo={setSingleInfo}/>
//above were you had info=info its actually info={singleInfo}, and the setSingleInfo={setSingleInfo} < helped not making the browser to refresh to see the update


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