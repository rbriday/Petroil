

// const NavbarCopy = () => {
 
//         const [isActive, setIsAcrive] = useState(false);

//   const navbarHandle = () => {
//     setIsAcrive(!isActive);
//   };
//   console.log("isActive", isActive);

//   return (
//     <div
//       id="home"
//       className="bg-primary py-[30px] border-t-4 border-[#EAB73B] fixed w-full z-999"
//     >
//       <Container>
//         <div className="flex justify-between items-center">
//           <div>
//             <img
//               src={logo}
//               alt="#logo"
//               className="max-w-[150px] md:max-w-[192px]"
//             />
//           </div>
//           <div onClick={navbarHandle} className="block lg:hidden">
//             <FaBars className="text-[25px] text-white" />
//           </div>
//           <div
//             onClick={navbarHandle}
//             className={`${
//               isActive
//                 ? "fixed top-0 left-0 w-full h-full bg-black/40"
//                 : "hidden"
//             } lg:hidden`}
//           ></div>
//           <div
//             className={`${
//               isActive
//                 ? "flex flex-col p-3 space-y-3 fixed z-30 top-0 left-0 translate-x-[0] h-full bg-[#000] w-[250px]"
//                 : "hidden"
//             } translate-x-[-100%] lg:translate-x-0 lg:flex lg:items-center transition-all`}
//           >
//             <div className="lg:hidden flex items-center justify-between">
//               <img
//                 src={logo}
//                 alt="#logo"
//                 className="max-w-[150px] md:max-w-[192px]"
//               />
//               <div onClick={navbarHandle}>
//                 <IoMdClose className="text-[25px] text-white" />
//               </div>
//             </div>
//             <div activeClass="bg-green-500">
//               <ul className=" lg:flex gap-[47px] space-y-2 lg:space-y-0">
//                 <li className="font-primary text-[16px] font-semibold leading-auto text-[#fff]">
//                   <a href="#home">Home</a>
//                 </li>
//                 <li className="font-primary text-[16px] font-semibold leading-auto text-[#fff]">
//                   <a href="#about">About</a>
//                 </li>
//                 <li className="font-primary text-[16px] font-semibold leading-auto text-[#fff]">
//                   <a href="#service">Services</a>
//                 </li>
//                 <li className="font-primary text-[16px] font-semibold leading-auto text-[#fff]">
//                   <a href="#gallery">Gallery</a>
//                 </li>
//                 <li className="font-primary text-[16px] font-semibold leading-auto text-[#fff]">
//                   <a href="#blog">Blog</a>
//                 </li>
//               </ul>
//             </div>
//             <button
//               type="button"
//               className="py-[9px] sm:py-[13px] px-[32px] border-2 border-[#fff] font-primary text-[16px] font-semibold leading-auto text-[#fff] ml-0 lg:ml-[70px] uppercase cursor-pointer hover:bg-[#fff] hover:text-primary hover:rounded-[15px] hover:transition-all"
//             >
//               contact
//             </button>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };
    


// export default NavbarCopy;

