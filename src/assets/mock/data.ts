export type DataType = {
  id: number;
  title: string;
  date: DateType;
  news: NewsType[];
};

export type DateType = { startDate: number; endDate: number };

export type NewsType = {
  year: number;
  title: string;
};

export const data: DataType[] = [
  {
    id: 1,
    title: 'История',
    date: { startDate: 1981, endDate: 1986 },
    news: [
      {
        year: 1981,
        title: 'lorem',
      },
      {
        year: 1982,
        title: 'lorem lorem',
      },
      {
        year: 1983,
        title: 'lorem lorem lorem',
      },
      {
        year: 1984,
        title: 'lorem lorem lorem lorem',
      },
      {
        year: 1985,
        title: '"Семейка Аддамс / The Addams Family", США(реж. Барри Зонненфельд)',
      },
    ],
  },
  {
    id: 2,
    title: 'Кино',
    date: { startDate: 1987, endDate: 1991 },
    news: [
      {
        year: 1987,
        title: '"Хищник/Predator", США (реж. Джон Мактирнан',
      },
      {
        year: 1988,
        title: '"Кто подставил кролика Роджера/Who Framed Roger Rabbit", США(реж. Роберт Земекис)',
      },
      {
        year: 1989,
        title: '"Назад в будущее 2/ Back to the future 2", США (реж. Роберт Земекис)',
      },
      {
        year: 1990,
        title: '"Крепкий орешек 2/ Die hard 2"/ США( реж. Ренни Харлин)',
      },
      {
        year: 1991,
        title: '"Семейка Аддамс / The Addams Family", США(реж. Барри Зонненфельд)',
      },
    ],
  },
  {
    id: 3,
    title: 'Литература',
    date: { startDate: 1992, endDate: 1997 },
    news: [
      {
        year: 1992,
        title:
          'Нобелевская премия по литературе - Дерек Уолкотт, "За блестящий образец карибского эпоса в 64 разделах"',
      },
      {
        year: 1994,
        title: '"Бессоница" - роман Стивена Кинга',
      },
      {
        year: 1995,
        title: 'Нобелевская премия по литературе - Шеймас Хини',
      },
      {
        year: 1997,
        title: 'Гарри Поттер и философский камень - Дж. Роулинг',
      },
    ],
  },
  {
    id: 4,
    title: 'Театр',
    date: { startDate: 1999, endDate: 2004 },
    news: [
      {
        year: 1999,
        title:
          'Премьера балета "Золушка" в постановке Жан-Кристофа Майо, сценография Эрнеста Паньона',
      },
      {
        year: 2000,
        title: 'возобнавлено издание журнала "Театр"',
      },
      {
        year: 2002,
        title:
          'премьера трилогии Тома Стоппарда "Берег Утопии" Королевский Национальный театр, Лондон',
      },
      {
        year: 2003,
        title: 'lorem',
      },
    ],
  },
  {
    id: 5,
    title: 'Наука',
    date: { startDate: 2015, endDate: 2022 },
    news: [
      {
        year: 2015,
        title:
          '13 сентября - частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2016,
        title:
          'Телесоп "Хаббл" обнаружил самую удалённую из всех обнаруженных галактик, получивший название GN-z11',
      },
      {
        year: 2017,
        title: 'Компания Tesla официциально представила в мире электронный грузовик Tesla Semi',
      },
      {
        year: 2018,
        title:
          'Старт космичческого аппарата Solar Probe Plus, предназначенного для изучения Солнца',
      },
      {
        year: 2019,
        title: 'Google объявил о создании 53-кубитного квантового компьютера',
      },
      {
        year: 2020,
        title: 'Корабль Crew Dragon вернулся на землю из первого пилотируемого полёта',
      },
    ],
  },
  {
    id: 6,
    title: 'Спорт',
    date: { startDate: 2023, endDate: 2024 },
    news: [
      {
        year: 2023,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id ',
      },
      {
        year: 2024,
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id ',
      },
    ],
  },
];
