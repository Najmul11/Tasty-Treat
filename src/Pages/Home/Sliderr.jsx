import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from 'react-redux';


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

const Sliderr = () => {
  const {limitReviews}=useSelector(state=>state.review)

    return (
        <div className='slider'>
            <h3>Reviews</h3>
            <Slider {...settings}>
                {
                   limitReviews && limitReviews.map(rev=><div className='founder'>
                       <div>
                            <img src={rev?.user?.photo} alt='' height={200} width={200} />
                            <p>{rev.feedback}</p>
                       </div>
                    </div>
                    )
                }
            </Slider>
        </div>
    );
};

export default Sliderr;