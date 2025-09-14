import Container from "../../Layout/Container";


const Company = () => {
    return (
        <div className="py-[136px] bg-[#F0F0F0]">
            <Container>
                <div className="flex">
                <div className="w-[413px] bg-orange py-[100px] px-[75px]">
                    <h3 className="w-[262px] font-poppins font-bold text-[36px] text-white">Learn more about our company</h3>
                </div>
                <div className="bg-[url(./assets/company.png)] bg-cover bg-no-repeat bg-center py-[200px] px-[282px]">
                {/* <button className="font-poppins font-semibold text-[16px] text-orange py-[14px] px-[30px] bg-white cursor-pointer">Learn More</button> */}
                <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white text-orange hover:bg-orange group py-[13px] px-[30px] cursor-pointer">
                <span class="w-56 h-48  bg-orange absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-orange font-poppins font-semibold transition-colors duration-300 ease-in-out group-hover:text-white">
                  Learn More
                </span>
              </button>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Company;