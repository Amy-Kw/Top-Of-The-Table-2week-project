import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <div 
    className="Navbar"
    id="navbar">
      <Link to="/">Home </Link>  <br></br>
      <Link to="/users"> BoadGamers </Link> 
      <Link to="/info"> Post/Table Top Games Information</Link>
      {/* <Link to="/login"> Login - not done </Link> <br></br>  */}

    </div>
  );
}