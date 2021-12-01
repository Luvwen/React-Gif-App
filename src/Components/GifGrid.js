import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="category animate__animated animate__fadeIn">{category}</h3>
            <div className={'card-grid'}>
                {loading && <p className="animate__animated animate__flash">Loading</p>}
                {images.map(img => (
                    <GifGridItems key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
