import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <div 
    className="Navbar"
    id="navbar">
      <Link to="/">Home</Link> <br></br>
      <Link to="/users"> BoadGamers </Link> <br></br>
      <Link to="/infoPosts"> Post </Link> <br></br>
      <Link to="/infoList"> Table Top Games Information </Link> <br></br>

    </div>
  );
}