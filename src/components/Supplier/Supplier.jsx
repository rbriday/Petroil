import React from "react";
import Container from "../../Layout/Container";

const Supplier = () => {
  return (
    <div className="pt-[50px] md:pt-[78px] pb-[50px] md:pb-[100px]">
        <Container>
      <div className="md:flex justify-between items-center">
        <h3 className="w-auto md:w-[295px] font-poppins font-bold text-[30px] md:text-[48px] md:leading-[72px] text-primary pb-[20px] md:pb-0">
          The biggest supplier on the country
        </h3>
        <p className="w-auto text-center md:text-left md:w-[664px] font-poppins font-medium text-[16px] text-secondary">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution.
        </p>
      </div>
    </Container>
    </div>
  );
};

export default Supplier;
