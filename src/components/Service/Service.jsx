const Service = () => {
  return (
    <div className="mt-[30px]">
      <div className="md:flex">
        <div className="w-auto md:w-[50%] md:flex justify-end pr-[60px]">
          <div className=" mx-[20px] md:mx-0 w-auto md:w-[509px] md:pt-[106px] mb-[30px] md:mb-0">
            <h3 className="font-poppins font-bold text-[30px] md:text-[64px] text-primary">
              Our Services
            </h3>
            <p className="w-auto md:w-[405px] font-poppins font-medium text-[12px] md:text-[16px] text-secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="w-auto md:w-[50%]">
          <div className="relative bg-[url(./assets/serviceOne.png)] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 z-[-1]">
            <div className="relative z-[1] pt-[50px] md:pt-[147px] pl-[30px] md:pl-[115px] pb-[40px] md:pb-[140px]">
              <h3 className="font-poppins font-bold text-[30px] text-white mb-[19px]">
                Modern natural oil and gas refineries.
              </h3>
              <button className="font-poppins font-semibold text-[16px] text-white py-[13px] px-[30px] bg-orange">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="w-auto md:w-[50%]">
          <div className="relative bg-[url(./assets/serviceTwo.png)] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 z-[-1]">
            <div className="relative z-[1] pt-[50px] md:pt-[147px] pl-[40px] md:pl-[115px] pb-[40px] md:pb-[140px]">
              <h3 className="font-poppins font-bold text-[30px] text-white mb-[19px]">
                Supply of national industries.
              </h3>
              <button className="font-poppins font-semibold text-[16px] text-white py-[13px] px-[30px] bg-orange">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="w-auto md:w-[50%]">
          <div className="relative bg-[url(./assets/serviceThree.png)] bg-cover bg-no-repeat bg-center after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 z-[-1]">
            <div className="relative z-[1] pt-[50px] md:pt-[147px] pl-[50px] md:pl-[115px] pb-[40px] md:pb-[140px]">
              <h3 className="font-poppins font-bold text-[30px] text-white mb-[19px]">
                National fuel distribution and supply.
              </h3>
              <button className="font-poppins font-semibold text-[16px] text-white py-[13px] px-[30px] bg-orange">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
