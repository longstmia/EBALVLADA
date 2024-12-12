const parus = {
  name: 'IQCoffe Паруса',
  slug: 'parus',
  address: 'Малыгина, 90',
  mode: {
    weekday: {
      start: '14:00',
      end: '18:00',
    },
    free: {
      start: '10:00',
      end: '22:00',
    },
  },
  stylebook: {
    mainColor: '#FA5452',
    secondColor: '#FFC633',
    opacity: '0.18',
    pattern: 'hexagons',
  },
  categories: [
    {
      id: 1,
      category: 'breakfast',
      icon: 'breakfast',
      name: 'Завтраки',
    },
    {
      id: 2,
      category: 'drinks',
      icon: 'drinks',
      name: 'Напитки',
    },
    {
      id: 3,
      category: 'food',
      icon: 'food',
      name: 'Еда',
    },
    {
      id: 4,
      category: 'beans',
      icon: 'beans',
      name: 'Зерно',
    },
    {
      id: 5,
      category: 'accessories',
      icon: 'accessories',
      name: 'Аксессуары',
    },
  ],
  photos: [
    {
      id: 1,
      alt: 'Фото заведения',
      src: 'https://mayertrade.com.ua/img/cms/BLOGS/264-creatively-designed-cafes/creatively-designed-cafes_8.jpg',
    },
    {
      id: 2,
      alt: 'Фото заведения',
      src: 'https://maralin.ru/img/catalog_covers/4398-16432099690.jpg',
    },
    {
      id: 3,
      alt: 'Фото заведения',
      src: 'https://mayertrade.com.ua/img/cms/BLOGS/264-creatively-designed-cafes/creatively-designed-cafes_11.jpg',
    },
    {
      id: 4,
      alt: 'Фото заведения',
      src: 'https://mayertrade.com.ua/img/cms/BLOGS/264-creatively-designed-cafes/creatively-designed-cafes_23.jpg',
    },
    {
      id: 5,
      alt: 'Фото заведения',
      src: 'https://mayertrade.com.ua/img/cms/BLOGS/264-creatively-designed-cafes/creatively-designed-cafes_27.jpg',
    },
  ],
};

module.exports = parus
