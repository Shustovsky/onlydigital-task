export type IDataNews = {
  year: number;
  title: string;
};

export const dataNews: IDataNews[] = [
  {
    year: 2015,
    title: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
  },
  {
    year: 2016,
    title:
      'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
  },
  {
    year: 2017,
    title: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
  },
  {
    year: 2018,
    title:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  ',
  },
];

export type DataDateType = {
  startDate: number;
  endDate: number;
};

export const dataDates: DataDateType[] = [
  { startDate: 1987, endDate: 1991 },
  { startDate: 1992, endDate: 1996 },
  { startDate: 1997, endDate: 2002 },
  { startDate: 2002, endDate: 2006 },
  { startDate: 2007, endDate: 2011 },
  { startDate: 2015, endDate: 2022 },
];

export const dataEvents: string[] = ['Литература', 'Кино', 'Наука', 'История', 'События', 'Спорт'];
