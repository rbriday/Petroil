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
        </div>
      </Container>
    </div>
  );
};

export default Banner;
