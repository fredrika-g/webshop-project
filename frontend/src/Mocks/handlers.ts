import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:5000/products', () => {
    return HttpResponse.json({
      success: true,
      result: [
        {
          id: '1',
          title: 'Julgran i plast, 180 cm',
          price: '499',
        },
        {
          id: '2',
          title: 'Adventsljusstake i trä',
          price: '199',
        },
      ],
    });
  }),
];
