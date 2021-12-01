import getGifs from '../../helpers/GetGifs';

describe('Pruebas en getGifs', () => {
  test('debe de traer 12 elementos', async () => {
    const gifs = await getGifs('sasuke');

    expect(gifs.length).toBe(12);
  });

  test('debe de traer 0 elementos si no existe parámetro de busqueda', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
