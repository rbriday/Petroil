import React from 'react';
import Container from '../../Layout/Container';
import sponsorOne from '../../assets/sponsorOne.png'
import sponsorTwo from '../../assets/sponsorTwo.png'
import sponsorThree from '../../assets/sponsorThree.png'
import sponsorFour from '../../assets/sponsorFour.png'

const Sponsor = () => {
    return (
        <div className='py-[100px]'>
            <Container>
                <div className='flex justify-between'>
                    <img src= {sponsorOne} alt="#sopnsor" />
                    <img src= {sponsorTwo} alt="#sopnsor" />
                    <img src= {sponsorThree} alt="#sopnsor" />
                    <img src= {sponsorFour} alt="#sopnsor" />
                </div>
            </Container>
            
        </div>
    );
};

export default Sponsor;