import Container from "../../Layout/Container";

const Banner = () => {
  return (
    <div className="relative bg-[url(./assets/bannar.png)] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 z-[1] after:z-[-1]">
      <Container>
          <h1 className="font-poppins font-bold text-[30px] md:text-[64px] text-white pt-[100px] md:pt-[257px] z-[9]">
            We exist since 1975 on the oil and gas industry.
          </h1>
          {/* <button className="font-poppins font-semibold text-[16px] text-white py-[13px] px-[40px] bg-orange mt-[30px] mb-[257px]">LEARN MORE</button> */}
           <button class="font-poppins font-semibold text-[16px] text-white hover:before:bg-[#ffffff] relative z-[9999] h-[50px] w-40 overflow-hidden border border-red-500 bg-orange px-3  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-orange hover:before:left-0 hover:before:w-full mt-[30px] mb-[100px] md:mb-[257px]"><span class="relative z-10">LEARN MORE</span></button> 
      </Container>
    </div>
  );
};

export default Banner;
