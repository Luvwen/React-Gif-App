import React from 'react';

const { shallow } = require('enzyme');
import { AddCategory } from '../../Components/AddCategory';

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar el texto dentro del input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });
    });

    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar al setCategories y limpiar la caja de texto', () => {
        const value = 'Hola a todos';

        //Simular el input change
        wrapper.find('input').simulate('change', { target: { value } });
        // Simular el form submit
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        //El setCategories se haya llamado por lo menos 1 vez
        expect(setCategories).toHaveBeenCalled();
        //El valor del input debe ser ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
