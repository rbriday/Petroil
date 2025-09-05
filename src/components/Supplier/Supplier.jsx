import React from "react";
import Container from "../../Layout/Container";

const Supplier = () => {
  return (
    <div className="pt-[78px] pb-[100px]">
        <Container>
      <div className="flex justify-between items-center">
        <h3 className="w-[295px] font-poppins font-bold text-[48px] leading-[72px] text-primary">
          The biggest supplier on the country
        </h3>
        <p className="w-[664px] font-poppins font-medium text-[16px] text-secondary">
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
