import { TextSlider } from './../components/TextSlider.tsx';
import style from './Section.module.scss';
import { CircleSlider } from './../components/CircleSlider.tsx';
import { DataType } from '../assets/mock/data.ts';
import { useState } from 'react';

export function Section({ data }: { data: DataType[] }) {
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
