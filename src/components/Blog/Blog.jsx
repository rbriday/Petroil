import Container from "../../Layout/Container";
import { IoIosArrowForward } from "react-icons/io";


const Blog = () => {
    return (
        <div className="py-[100px] bg-[#F0F0F0]">
            <Container>
                <div className="flex justify-between">
                    <div className="relative w-[339px] bg-[url(./assets/blogOne.png)] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 z-[1]">
                        <div className="w-[249px] relative z-[1] pt-[75px] pl-[46px] pb-[55px]">
                            <h4 className="font-poppins font-bold text-white text-[24px] mb-[52px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                            {/* <button className="font-poppins font-semibold text-[12px] text-white bg-[#A7907B] py-[10px] px-[22px] cursor-pointer">Read More</button> */}
                            <button class="font-poppins font-semibold text-[12px] hover:before:bg-redborder-red-500 relative py-[10px] px-[22px] overflow-hidden bg-[#A7907B] text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full cursor-pointer"><span class="relative z-10">Read More</span></button>
                        </div>
                    </div>
                     <div className="relative w-[339px] bg-[url(./assets/blogTwo.png)] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 z-[1]">
                        <div className="w-[249px] relative z-[1] pt-[75px] pl-[46px] pb-[55px]">
                            <h4 className="font-poppins font-bold text-white text-[24px] mb-[52px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                            {/* <button className="font-poppins font-semibold text-[12px] text-white bg-[#A7907B] py-[10px] px-[22px] cursor-pointer">Read More</button> */}
                             <button class="font-poppins font-semibold text-[12px] hover:before:bg-redborder-red-500 relative py-[10px] px-[22px] overflow-hidden bg-[#A7907B] text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full cursor-pointer"><span class="relative z-10">Read More</span></button>
                        </div>
                    </div>
                     <div className="relative w-[339px] bg-[url(./assets/blogThree.png)] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 z-[1]">
                        <div className="w-[249px] relative z-[1] pt-[75px] pl-[46px] pb-[55px]">
                            <h4 className="font-poppins font-bold text-white text-[24px] mb-[52px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                            {/* <button className="font-poppins font-semibold text-[12px] text-white bg-[#A7907B] py-[10px] px-[22px] cursor-pointer">Read More</button> */}
                            <button class="font-poppins font-semibold text-[12px] hover:before:bg-redborder-red-500 relative py-[10px] px-[22px] overflow-hidden bg-[#A7907B] text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full cursor-pointer"><span class="relative z-10">Read More</span></button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center mt-[30px]">
                    <h4 className="font-poppins font-blod text-[16px] text-black mr-[5px] cursor-pointer">MORE FROM THE BLLOG</h4>
                    <IoIosArrowForward  size={16}/>
                </div>
            </Container>
        </div>
    );
};

export default Blog;