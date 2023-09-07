import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <div 
    className="Navbar"
    id="navbar">
      <Link to="/">Home -not done</Link> <br></br>
      <Link to="/users"> BoadGamers - not done</Link> <br></br>
      <Link to="/info"> Post/Table Top Games Information</Link> <br></br>
      <Link to="/login"> Login - not done </Link> <br></br> 

    </div>
  );
}