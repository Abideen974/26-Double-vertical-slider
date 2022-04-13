import React,{useState  , useEffect, useRef} from 'react'
import './virticalslider.css'

function Virticalslider() {
    const sliderContainer = useRef(null);
    const slideRight = useRef(null);
    const slideLeft = useRef(null);
    const upButton = useRef(null);
    const downButton = useRef(null);
    const slidesLength = 4;
    let activeSlideIndex = 0;
  
    useEffect(()=>{
  
      slideLeft.current.style.top = `-${(slidesLength - 1) * 100}vh`;
    },[])
  
    const changeSlide = (direction) => {
      const sliderHeight = sliderContainer.current.clientHeight;
      if(direction == "up") {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1) {
          activeSlideIndex = 0;
  
        }
      }
      else if(direction == "down"){
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
          activeSlideIndex = slidesLength - 1;
  
        }
      }
      slideRight.current.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
      slideLeft.current.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
    }
  
    return (
  
      <div className="slider-container" ref={sliderContainer}>
        <div className="left-slide" ref={slideLeft}>
          <div style={{ backgroundColor: '#FD3555' }} >
          <h1>Night moon </h1>
            <p>beauty of earth</p>
          </div>
          <div style={{ backgroundColor: '#2A68BA' }}>
            <h1>Snow fallings </h1>
            <p>beauty of snow falling</p>
          </div>
          <div style={{ backgroundColor: '#252E33' }}>
            <h1>Moon</h1>
            <p>in the evening</p>
          </div>
          <div style={{ backgroundColor: '#FFB866' }}>
            <h1>Sea side </h1>
            <p>in the sunset</p>
          </div>
        </div>
        <div className="right-slide" ref={slideRight}>
          <div
            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1449960238630-7e720e630019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}
          >
          </div>
          <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1429892494097-cccc61109f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}
          >
          </div>
          <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1484441876734-071a3e4b1ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80")` }}>
          </div>
          <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1443631338765-3ff3f7fa5ea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
          </div>
  
        </div>
        <div className="action-buttons">
          <button className="down-button" onClick={()=>changeSlide("down")}  ref={downButton}>
            <i className="fas fa-arrow-down"></i>
          </button>
          <button className="up-button" onClick={()=>changeSlide("up")} ref={upButton}>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
  
      </div>
  
    );
}

export default Virticalslider