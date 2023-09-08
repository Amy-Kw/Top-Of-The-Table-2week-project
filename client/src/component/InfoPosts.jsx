import DeleteInfoPost from "./DeleteInfoPost";
import CreateInfoPost from "./EditInfoPost";
import { Link } from "react-router-dom";

//react - need cap for 1st letter

export default function InfoPost({ info }) {

  return(
    <div>

    <Link to={`/info/${info.info_id}`} >
    
      <p className="gametitle"> {info.gametitle}</p>



    </Link>
    
            <DeleteInfoPost infoId={info.info_id}/>
            <CreateInfoPost infoId={info.info_id}/>
      
    </div>
  );
}

