import Container from "../../Layout/Container";

const Banner = () => {
  return (
    <div className="relative bg-[url(./assets/bannar.png)] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 z-[-1]">
      <Container>
        <div className="relative z-[1] w-[842px] pt-[257px]">
          <h1 className="font-poppins font-bold text-[64px] text-white">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <button className="font-poppins font-semibold text-[16px] text-white py-[13px] px-[40px] bg-orange mt-[30px] mb-[257px]">LEARN MORE</button>
           {/* <button class="text-red hover:before:bg-redborder-red-500 relative z-[9999] h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span class="relative z-10">Swipe</span></button> */}
        </div>
      </Container>
    </div>
  );
};

export default Banner;
