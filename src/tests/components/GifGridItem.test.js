import React from 'react';
const { shallow } = require('enzyme');
const { GifGridItems } = require('../../Components/GifGridItems');

describe('Pruebas en GifGridItem', () => {
  const url = 'https://localhost/algo/hola.jpg';
  const title = 'Un titulo cualquiera';

  const wrapper = shallow(<GifGridItems url={url} title={title} />);

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(title);
  });

  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
});
