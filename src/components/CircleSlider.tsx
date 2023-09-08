import style from './CircleSlider.module.scss';
import { DataDateType } from '../assets/mock/dataNews.ts';
import array from '../assets/img/array-grey.svg';
import { useState } from 'react';

type CircleSliderType = {
  dataDates: DataDateType[];
  dataEvents: string[];
};

export function CircleSlider({ dataDates, dataEvents }: CircleSliderType) {
  const [dateIndex, setDateIndex] = useState(0);
  const { startDate, endDate } = dataDates[dateIndex];
  const [showLabelIndex, setShowLabelIndex] = useState(-1);

  const angleIncrement = (2 * Math.PI) / dataEvents.length;
  const points = Array.from({ length: dataEvents.length }, (_, index) => {
    const angle = index * angleIncrement;
    const x = 16.5 * Math.cos(angle);
    const y = 16.5 * Math.sin(angle); //radius = 16.5;
    return { x, y };
  });

  const incIndexDate = () => {
    setDateIndex((prevState) => {
      return prevState < dataDates.length - 1 ? prevState + 1 : 0;
    });
  };

  const decIndexDate = () => {
    setDateIndex((prevState) => {
      return prevState === 0 ? dataDates.length - 1 : prevState - 1;
    });
  };

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
        <button onClick={decIndexDate}>
          <img src={array} alt="array prev" />
        </button>
        <button onClick={incIndexDate}>
          <img src={array} alt="array prev" />
        </button>
      </div>
    </>
  );
}
