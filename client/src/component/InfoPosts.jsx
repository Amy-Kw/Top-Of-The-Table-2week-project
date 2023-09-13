import DeleteInfoPost from "./DeleteInfoPost";
import CreateInfoPost from "./EditInfoPost";
import UpdatedInfoPost from "./Edit";
import { Link } from "react-router-dom";

//react - need cap for 1st letter

export default function InfoPost({ info, setAllInfo }) {

  return(
    <div>

    <Link to={`/info/${info.info_id}`} >
    
      <p className="gametitle"> {info.gametitle}</p>



    </Link>
    
            <DeleteInfoPost info_id={info.info_id}/>  
            <CreateInfoPost setAllInfo={setAllInfo}/>

            <UpdatedInfoPost setAllInfo={setAllInfo}/>
            
            

      
    </div>
  );
}

    //<UpdatedInfoPost info_id={info.info_id}/>

///info_id - is the same as infoId - its whatever you name it

