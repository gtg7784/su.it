import { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import {QnaType} from 'interfaces';
import styles from 'styles/slider.scss'

type Props = {
  data: QnaType[]
}

const Slider = ({ data }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let slideRef = useRef<HTMLDivElement>(null);

  const TOTAL_SLIDES = data.length - 1;

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current!.style.transition = "all 0.5s ease-in-out";
    slideRef.current!.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

return (
    <div className={styles.slider}>
      <button onClick={prevSlide}>Previous Slide</button>
      <div>
      <div ref={slideRef}>
        {data.map((item, index) => <Slide data={item} key={index}/>)}
      </div>
      </div>
      <button onClick={nextSlide}>Next Slide</button>
    </div>
  );
}

export default Slider;