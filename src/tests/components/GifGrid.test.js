import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../Components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba en GifGrid', () => {
    const category = 'Hola mundo';

    test('debe hacer match el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGif', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/galery/sasuke.jpg',
                title: 'Sasuke',
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItems').length).toBe(gifs.length);
    });
});
