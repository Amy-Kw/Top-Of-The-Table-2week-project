import DeleteInfoPost from "./DeleteInfoPost";
import { Link } from "react-router-dom";
// import CreateInfoPost from "./EditInfoPost";
//react - need cap for 1st letter

export default function InfoPost({ info }) {

  return(
    <div>

    <Link to={`/info/${info.info_id}`} >
    
      <p className="gametitle"> {info.gametitle}</p>


    </Link>
    
      <DeleteInfoPost infoId={info.info_id}/>
      {/* <CreateInfoPost info={} */}
    </div>
  );
}

