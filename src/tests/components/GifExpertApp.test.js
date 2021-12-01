import React from 'react';
import { GifExpertApp } from '../../Components/GifExpertApp';
const { shallow } = require('enzyme');

describe('Pruebas en GifExpertApp', () => {
    test('Comprobar si se muestra correctamente ', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Sasuke', 'Vegeta'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
