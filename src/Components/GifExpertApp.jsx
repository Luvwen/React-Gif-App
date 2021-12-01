import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = ({ defaultCategories=[] }) => {
  const [categories, setCategories] = useState(
    defaultCategories
  );

  return (
    <div className="container-card">
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => <GifGrid 
        key={ category }
        category={ category }/>)}
      </ol>
    </div>
  );
};
