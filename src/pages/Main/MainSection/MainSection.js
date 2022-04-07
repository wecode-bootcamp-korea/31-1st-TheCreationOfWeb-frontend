import React, { useRef, useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './MainSection.scss';

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const moveDot = index => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useInterval(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 4000);

  return (
    <div className="MainSection">
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={current === index ? 'slideImg activeAnim' : 'slideImg'}
          >
            {index === current && <img src={slide.image} alt="" />}
          </div>
        );
      })}
      <FaChevronLeft className="leftArrow" onClick={prevSlide} />
      <FaChevronRight className="rightArrow" onClick={nextSlide} />
      <div className="containerDots">
        {Array.from({ length: 5 }).map((item, index) => {
          return (
            <div
              key={item}
              className={current === index ? 'dot active' : 'dot'}
              onClick={() => {
                moveDot(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
