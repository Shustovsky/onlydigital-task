import style from './Slide.module.scss';
import { NewsType } from '../assets/mock/data.ts';

export function TextSliderItem({ data }: { data: NewsType }) {
  return (
    <div className={style[`slide-container`]}>
      <h3>{data.year}</h3>
      <p>{data.title}</p>
    </div>
  );
}
