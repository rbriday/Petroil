import React from "react";
import Container from "../../Layout/Container";
import Button from "../../Layout/Button";

const Area = () => {
  return (
    <div className="bg-orange py-[45px] border-b-5 border-[#FFB800]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-[960px]">
            <h4 className="font-poppins text-[36px] font-bold text-white">
              Want to join as member branch in your area?
            </h4>
          </div>
          <div>
            <Button></Button>
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Area;
