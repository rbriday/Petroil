import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderOne from "../../assets/sliderOne.png"
import sliderTwo from "../../assets/sliderTwo.png"
import sliderThree from "../../assets/sliderThree.png"
import sliderFour from "../../assets/sliderFour.png"


const SliderImg = () => {
    var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint:320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <div>
            <Slider className="flex justify-between" {...settings}>
            <img src= {sliderOne} alt="#Slider" className="w-[24%]" />
            <img src= {sliderTwo} alt="#Slider" className="w-[24%]" />
            <img src= {sliderThree} alt="#Slider" className="w-[24%]" />
            <img src= {sliderFour} alt="#Slider" className="w-[24%]" />
            <img src= {sliderTwo} alt="#Slider" className="w-[24%]" />
    </Slider>
        </div>
    );
};

export default SliderImg;