import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { TextSliderItem } from './TextSliderItem.tsx';
import array from './../assets/array.svg';
import styles from './TextSlider.module.scss';
import { IDataNews } from '../assets/dataNews.ts';
import { v4 as uuidv4 } from 'uuid';

type dataType = {
  data: IDataNews[];
};

export function TextSlider({ data }: dataType) {
  const id = uuidv4();
  const nextButtonId = `next-button-${id}`;
  const prevButtonId = `prev-button-${id}`;

  return (
    <div className={`${styles['text-slider-container']}`}>
      <Swiper
        slidesPerView={3}
        spaceBetween={80}
        navigation={{
          nextEl: `#${nextButtonId}`,
          prevEl: `#${prevButtonId}`,
          disabledClass: `${styles['swiper-button-disabled']}`,
        }}
        modules={[Navigation]}
        className={`mySwiper ${styles['text-slider']}`}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <TextSliderItem data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        id={nextButtonId}
        className={`${styles['swiper-button']} ${styles['image-swiper-button-next']}`}
      >
        <img src={array} alt="array next" />
      </div>
      <div
        id={prevButtonId}
        className={`${styles['swiper-button']} ${styles['image-swiper-button-prev']}`}
      >
        <img src={array} alt="array prev" />
      </div>
    </div>
  );
}
