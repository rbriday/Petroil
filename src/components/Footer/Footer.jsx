import Container from "../../Layout/Container";
import logo from "../../assets/footerLogo.png";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import cert from '../../assets/cert.png'
import cert1 from '../../assets/cert1.png'
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <>
    <div className="bg-[#1F1F1F] py-[100px]">
      <Container>
        <div className="flex justify-between">
          <div>
            <div>
              <img src={logo} alt="" className="mb-[33px]" />
              <div className="flex items-center mb-[15px]">
                <MdOutlineMarkEmailUnread size={14} color="white" />
                <p className="font-poppins text-[14px] text-white ml-[5px]">
                  mail@yourcompany.com
                </p>
              </div>
              <div className="flex items-center mb-[15px]">
                <FaPhoneVolume size={14} color="white" />
                <p className="font-poppins text-[14px] text-white ml-[5px]">
                  +896 120 5889 (Toll free)
                </p>
              </div>
              <div className="flex items-center mb-[15px]">
                <FaMapLocation size={14} color="white" />
                <p className="font-poppins text-[14px] text-white ml-[5px]">
                  101 Baker Street, New York, USA, 12345
                </p>
              </div>
            </div>
            <div className="mt-[20px] flex items-center">
              <div className="w-[30px] h-[30px] bg-orange rounded-full flex items-center justify-center text-white mr-[12px]">
                <FaFacebookF />
              </div>
              <div className="w-[30px] h-[30px] bg-orange rounded-full flex items-center justify-center text-white mr-[12px]">
                <FaTwitter />
              </div>
              <div className="w-[30px] h-[30px] bg-orange rounded-full flex items-center justify-center text-white mr-[12px]">
                <FaLinkedinIn />
              </div>
              <div className="w-[30px] h-[30px] bg-orange rounded-full flex items-center justify-center text-white mr-[12px]">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <ul>
              <li className="font-poppins font-bold text-white text-[16px] mb-[21px]">Company</li>
              <li className="font-poppins text-white text-[14px] mb-[15px]"><a href="#">Home</a></li>
              <li className="font-poppins text-white text-[14px] mb-[15px]"><a href="#">About</a></li>
              <li className="font-poppins text-white text-[14px] mb-[15px]"><a href="#">Services</a></li>
              <li className="font-poppins text-white text-[14px] mb-[15px]"><a href="#">Gallery</a></li>
            </ul>
          </div>
          <div className="mt-[30px]">
            <ul>
              <li className="font-poppins font-bold text-white text-[16px] mb-[21px]">Others</li>
              <li className="font-poppins text-white text-[14px] mb-[15px]"><a href="#">Blog</a></li>
              <li className="font-poppins text-white text-[14px] mb-[15px]"><a href="#">Contact</a></li>
              <li className="font-poppins text-white text-[14px] mb-[15px]"><a href="#">Terms & Conditions</a></li>
              <li className="font-poppins text-white text-[14px] mb-[15px]"><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="mt-[30px]">
            <ul>
              <li className="font-poppins font-bold text-white text-[16px] mb-[21px]">Certificate</li>
            </ul>
            <div className="flex space-x-5">
              <img src= {cert} alt="#cert" />
              <img src= {cert1} alt="#cert" />
            </div>
          </div>
        </div>
      </Container>
    </div>
    <CopyRight></CopyRight>
    </>
  
  );
};

export default Footer;
