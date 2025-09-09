import React from 'react';
import Container from '../../Layout/Container';

const Area = () => {
    return (
        <div className='bg-orange py-[45px] border-b-5 border-[#FFB800]'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='w-[960px]'>
                <h4 className='font-poppins font-blod text-[36px] text-white'>Want to join as member branch in your area?</h4>
            </div>
            <div>
                <button className='font-poppins font-semibold text-[16px] text-white border-1 border-white py-[13px] px-[30px]'>Contact</button>
            </div>
                </div>
            </Container>
        </div>
    );
};

export default Area;