import style from './CircleSlider.module.scss';
import { DataDateType } from '../assets/mock/dataNews.ts';
import array from '../assets/img/array-grey.svg';
import { useEffect, useState } from 'react';
import { calculatePointCoordinates } from '../utils/calculatePointCoordinates.ts';

type CircleSliderType = {
  dataDates: DataDateType[];
  dataEvents: string[];
};

export function CircleSlider({ dataDates, dataEvents }: CircleSliderType) {
  const [dateIndex, setDateIndex] = useState(0);
  const [startDate, setStartDate] = useState(dataDates[dateIndex].startDate);
  const [endDate, setEndDate] = useState(dataDates[dateIndex].endDate);
  const [showLabelIndex, setShowLabelIndex] = useState(-1);

  const points = dataEvents.map((_, index) => calculatePointCoordinates(index, dataEvents.length));

  const updateDates = () => {
    const startDateDiff = dataDates[dateIndex].startDate - startDate;
    const endDateDiff = dataDates[dateIndex].endDate - endDate;

    setStartDate((prevState) => prevState + Math.sign(startDateDiff));
    setEndDate((prevState) => prevState + Math.sign(endDateDiff));
  };

  const nextDate = () => {
    setDateIndex((prevState) => (prevState < dataDates.length - 1 ? prevState + 1 : 0));
  };

  const prevDate = () => {
    setDateIndex((prevState) => (prevState === 0 ? dataDates.length - 1 : prevState - 1));
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
            >
              <div
                className={style.point}
                style={{
                  left: `${point.x}rem`,
                  top: `${point.y}rem`,
                }}
              ></div>
              {showLabelIndex === index && (
                <div
                  style={{
                    left: `${point.x - 1.5}rem`,
                    top: `${point.y - 1.5}rem`,
                  }}
                  className={style.label}
                >
                  <div className={style['label-circle']}>{index + 1}</div>
                  {dataEvents[index]}
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
        <span>{('00' + (dateIndex + 1)).slice(-2)}</span>
        <span>{'/'}</span>
        <span>{('00' + dataEvents.length).slice(-2)}</span>
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
