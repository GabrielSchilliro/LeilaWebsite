import React, { Component } from 'react';
import Slider from "react-slick";
import SectionTitle from '../sectionTitle/SectionTitle';
import flecharosa from '../../assets/flecharosa.png'
import testimonials from '../../data/Testimonials'
import TestimonioItem from './TestimonioItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonios extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 1
    };
    return (
      <div className="py-12 px-4 text-center container mx-auto w-2/3" id='testimonios'>
        <SectionTitle>Escuchá algunos testimonios</SectionTitle>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {testimonials.map(testimonios => (
            <div className='px-2'>
              <TestimonioItem
                key={testimonios.name}
                profileFoto={testimonios.profileFoto}
                name={testimonios.name}
                testimonio={testimonios.testimonio}
              />
            </div>
          ))}
        </Slider>
        <div className='flex flex-row justify-between -mt-36 -mx-12 mb-12'>
          <button className="w-12 rotate-90 hover:-translate-y-1 hover:scale-110 duration-300" onClick={this.previous}>
            <img src={flecharosa} alt='flecha izquierda carousel' />
          </button>
          <button className="w-12 -rotate-90 hover:-translate-y-1 hover:scale-110 duration-300" onClick={this.next}>
            <img src={flecharosa} alt='flecha derecha carousel' />
          </button>
        </div>
      </div>
    )
  }
}

export default Testimonios