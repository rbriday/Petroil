import sliderOne from "../../assets/sliderOne.png"
import sliderTwo from "../../assets/sliderTwo.png"
import sliderThree from "../../assets/sliderThree.png"
import sliderFour from "../../assets/sliderFour.png"

const Slider = () => {
    return (
        <div className="flex justify-between">
            <img src= {sliderOne} alt="#Slider" className="w-[24%]" />
            <img src= {sliderTwo} alt="#Slider" className="w-[24%]" />
            <img src= {sliderThree} alt="#Slider" className="w-[24%]" />
            <img src= {sliderFour} alt="#Slider" className="w-[24%]" />
        </div>
    );
};

export default Slider;