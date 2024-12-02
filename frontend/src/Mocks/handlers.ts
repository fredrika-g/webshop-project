import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:5000/products', () => {
    return HttpResponse.json({
      success: true,
      result: [
        {
          id: 1,
          title: 'Julgran i plast, 180 cm',
          price: 499,
        },
        {
          id: 2,
          title: 'Adventsljusstake i trä',
          price: 199,
        },
      ],
    });
  }),
  http.get('http://localhost:5000/products/:id', () => {
    return HttpResponse.json({
      success: true,
      result: {
        id: 1,
        title: 'Julgran i plast, 180 cm',
        price: 499,
        categories: ['jul', 'dekoration'],
        stock: 96,
        img: 'christmasdecor.jpg',
        description:
          'En naturtrogen julgran i plast som är lätt att montera och återanvända.',
      },
    });
  }),
  http.get('http://localhost:5000/cart', () => {
    return HttpResponse.json({
      success: true,
      result: [
        {
          id: 1,
          title: 'Julgran i plast, 180 cm',
          price: 499,
          categories: ['jul', 'dekoration'],
          stock: 96,
          description:
            'En naturtrogen julgran i plast som är lätt att montera och återanvända.',
        },
      ],
    });
  }),
];
