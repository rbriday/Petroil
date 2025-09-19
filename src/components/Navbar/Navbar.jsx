import { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../../Layout/Button";
import Container from "../../Layout/Container";
import { FaBars } from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";

const Navbar = () => {

const [manuToggol, setManuToggol] = useState(false);

const manuToggolHandle = () =>{
    setManuToggol(!manuToggol);
}
  return (
    <div className="bg-orange py-[30px]">
      <Container>
        <div className="md:flex justify-between">
          <div className="relative">
            <img src={logo} alt="#logo" />
            <div className="md:hidden absolute right-[20px] top-0">
                <span onClick={manuToggolHandle}>
                    {
                        manuToggol ? 
                        <TbArrowsCross className="text-[50px] text-white" /> : 
                        <FaBars className="text-[40px] text-white" /> 
                        
                    }
                </span>
              
              
            </div>
          </div>
          <div>
            {/* <ul className="hidden md:flex items-center space-x-[47px] font-poppins font-semibold text-white "> */}
            <ul className={`${manuToggol ? "block text-[20px] bg-[#282828] px-5 py-5 mt-[10px] transition-all duration-[600]" : "hidden"} md:flex items-center space-x-[47px] font-poppins font-semibold text-white`} >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <div className="hidden md:block">
                <Button></Button>
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
