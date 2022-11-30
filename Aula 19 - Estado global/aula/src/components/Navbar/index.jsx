import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home </Link>
      <Link to="/dashboard">Dashboard </Link>
    </>
  );
};

export default Navbar;