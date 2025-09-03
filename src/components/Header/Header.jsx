import React from "react";
import Container from "../../Layout/Container";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";




const Header = () => {
  return (
    <div className="bg-[#282828] border-b-5 border-[#FFB800]">
      <Container>
        <div className="flex justify-between text-white font-poppins text-[12px] py-[16px]">
          <div className="flex space-x-[50px]">
            <div className="flex items-center space-x-[5px]">
              <MdOutlineMarkEmailUnread size={20} />
              <p>mail@yourcompany.com</p>
            </div>
            <div className="relative flex items-center space-x-[5px] after:absolute after:content-[''] after:top-[3px] after:left-[-27px] after:w-[2px] after:h-[16px] after:bg-[#5C6A92]">
              <FaPhoneVolume size={16} />
              <p>mail@yourcompany.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-[19px]">
            <FaFacebookF size={16} className="hover:text-yellow-500 hover:cursor-pointer" />
            <FaTwitter size={16} className="hover:text-yellow-500 hover:cursor-pointer" />
            <FaLinkedin size={16} className="hover:text-yellow-500 hover:cursor-pointer" />
            <FaInstagram size={16} className="hover:text-yellow-500 hover:cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
