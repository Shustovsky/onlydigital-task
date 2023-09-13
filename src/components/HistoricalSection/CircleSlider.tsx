import React, { useEffect, useState } from 'react';
import style from './CircleSlider.module.scss';
import array from '../../assets/img/array-grey.svg';
import { calculatePointCoordinates } from '../../utils/calculatePointCoordinates.ts';
import { DataType } from '../../assets/mock/data.ts';

type CircleSliderType = {
  data: DataType[];
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
};

export function CircleSlider({ data, slideIndex, setSlideIndex }: CircleSliderType) {
  const [startDate, setStartDate] = useState(data[slideIndex].date.startDate);
  const [endDate, setEndDate] = useState(data[slideIndex].date.endDate);
  const [showLabelIndex, setShowLabelIndex] = useState(-1);
  const points = data.map((_, index) => calculatePointCoordinates(index, data.length));

  const updateDates = () => {
    const startDateDiff = data[slideIndex].date.startDate - startDate;
    const endDateDiff = data[slideIndex].date.endDate - endDate;

    setStartDate((prevState) => prevState + Math.sign(startDateDiff));
    setEndDate((prevState) => prevState + Math.sign(endDateDiff));
  };

  const nextDate = () => {
    setSlideIndex((prevState) => (prevState < data.length - 1 ? prevState + 1 : 0));
  };

  const prevDate = () => {
    setSlideIndex((prevState) => (prevState === 0 ? data.length - 1 : prevState - 1));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      updateDates();
    }, 50);
    return () => clearInterval(interval);
  }, [nextDate]);

  return (
    <>
      <div className={style.container}>
        <div className={style['point-container']}>
          {points.map((point, index) => (
            <div
              key={index}
              className={style.pointContainer}
              onMouseEnter={() => setShowLabelIndex(index)}
              onMouseLeave={() => setShowLabelIndex(-1)}
              // style={{ transform: `rotate(${(slideIndex + 1) * 0.85}turn)` }}
            >
              <div
                className={style.point}
                style={{
                  left: `${point.x}rem`,
                  top: `${point.y}rem`,
                }}
              ></div>
              {slideIndex === index && (
                <div
                  style={{
                    left: `${point.x}rem`,
                    top: `${point.y}rem`,
                    // transform: `rotate(${(slideIndex + 1) * -0.85}turn) translate(-4%, 119%)`,
                    transform: 'translate(-13.5%, -49.5%)',
                  }}
                  className={style.label}
                >
                  <div className={style['label-circle']}>{index + 1}</div>
                  <div className={style['label-text']}>{data[index].title}</div>
                </div>
              )}
              {showLabelIndex === index && (
                <div
                  style={{
                    left: `${point.x}rem`,
                    top: `${point.y}rem`,
                    // transform: 'rotate(-0.85turn) translate(-70%, 10%)',
                    transform: 'translate(-50%, -50%)',
                  }}
                  className={style.label}
                  onClick={() => setSlideIndex(index)}
                >
                  <div className={style['label-circle']}>{index + 1}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={style.dates}>
          <p className={style.startDate}>{startDate}</p>
          <p className={style.endDate}>{endDate}</p>
        </div>
      </div>
      <div className={style.counter}>
        <span>{('00' + (slideIndex + 1)).slice(-2)}</span>
        <span>{'/'}</span>
        <span>{('00' + data.length).slice(-2)}</span>
      </div>
      <div className={style['navigation-array']}>
        <button onClick={prevDate}>
          <img src={array} alt="array prev" />
        </button>
        <button onClick={nextDate}>
          <img src={array} alt="array prev" />
        </button>
      </div>
    </>
  );
}
