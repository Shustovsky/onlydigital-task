import { TextSlider } from './TextSlider.tsx';
import style from './Section.module.scss';
import { CircleSlider } from './CircleSlider.tsx';
import { DataType } from '../assets/mock/data.ts';
import { useState } from 'react';

type SectionType = {
  data: DataType[];
};

export function Section({ data }: SectionType) {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <>
      <section className={style.historical}>
        <h1 className={style.historical_header}>Исторические даты</h1>
        <CircleSlider data={data} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
        <TextSlider data={data[slideIndex].news} />
      </section>
    </>
  );
}
