import { CiSettings } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <GiHamburgerMenu size={30} color="white" />
      </div>
      <div className="navbar-center">
        <button className="btn btn-ghost">todo</button>
        <button className="btn btn-ghost">notes</button>
        <button className="btn btn-ghost">pomodoro</button>
      </div>

      <div className="navbar-end">
        <CiSettings className="cursor-pointer" size={30} color="white" />
      </div>
    </div>
  );
};

export default Navbar;
