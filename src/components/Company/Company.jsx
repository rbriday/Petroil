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
                <button className="font-poppins font-semibold text-[16px] text-orange py-[14px] px-[30px] bg-white cursor-pointer">Learn More</button></div>
            </div>
            </Container>
        </div>
    );
};

export default Company;