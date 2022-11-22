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
      <div>
        specifics components are provided for the controlled components are
        hence there are so many Things in this world on which we dont have any
        control loke earthquakes tsunamies and what not but the thing is that on
        what we can like to forgive someone or to spread hapiness without
        expecting any in return
      </div>
      <div>
        <h1 className="specifics">Specifics !</h1>
      </div>
      <div className="navbar-end">
        <CiSettings className="cursor-pointer" size={30} color="white" />
      </div>
    </div>
  );
};

export default Navbar;
