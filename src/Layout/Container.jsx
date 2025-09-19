import React from 'react';

const Container = ({children}) => {
    return (
        <div className='md:w-[1140px] px-3 md:px-0 mx-auto'>
            {children}
        </div>
    );
};

export default Container;