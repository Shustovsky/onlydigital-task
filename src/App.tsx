import { TextSlider } from './components/TextSlider.tsx';
import style from './App.module.scss';
import { dataDates, dataEvents, dataNews } from './assets/mock/dataNews.ts';
import { CircleSlider } from './components/CircleSlider.tsx';

export function App() {
  return (
    <>
      <section className={style.historical}>
        <h1 className={style.historical_header}>Исторические даты</h1>
        <CircleSlider dataDates={dataDates} dataEvents={dataEvents} />
        <TextSlider data={dataNews} />
      </section>
    </>
  );
}
