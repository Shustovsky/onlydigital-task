import { IDataNews } from '../assets/mock/dataNews.ts';
import style from './Slide.module.scss';

export function TextSliderItem({ data }: { data: IDataNews }) {
  return (
    <div className={style[`slide-container`]}>
      <h3>{data.year}</h3>
      <p>{data.title}</p>
    </div>
  );
}
