import { TextSlider } from './components/TextSlider.tsx';
import style from './App.module.scss';
import { dataNews } from './assets/dataNews.ts';

export function App() {
  return (
    <>
      <section className={style.historical}>
        <h1 className={style.historical_header}>Исторические даты</h1>
        <TextSlider data={dataNews} />
      </section>
    </>
  );
}
