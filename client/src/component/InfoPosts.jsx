import DeleteInfoPost from "./DeleteInfoPost";
import CreateInfoPost from "./CreateInfoPost";
// import UpdatedInfoPost from "./Edit";
// import SingleInfoPost from "./SingleInfoPost";
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
            {/* <SingleInfoPost info={info}/> */}  

            
            
            

      
    </div>
  );
}

//commenting the single post out or else it would break the info browser

//<UpdatedInfoPost setAllInfo={setAllInfo}/>
    //<UpdatedInfoPost info_id={info.info_id}/>

///info_id - is the same as infoId - its whatever you name it

//left off here - trying to pass the correct naming of the props or trying to pass the correct props