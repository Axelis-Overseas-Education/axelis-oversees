import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'John Doe',
      position: 'Student'
    },
    {
      id: 2,
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      author: 'Jane Doe',
      position: 'Alumnus'
    },
    {
      id: 3,
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'Alice Smith',
      position: 'Parent'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mx-auto max-w-2xl mt-8">
      <Slider {...settings}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="p-8 bg-gray-100 rounded-md">
            <p className="text-lg">{testimonial.text}</p>
            <div className="mt-4">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;