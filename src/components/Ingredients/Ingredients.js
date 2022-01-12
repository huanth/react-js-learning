import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [useIngredients, setUseIngredients] = useState([]);

  const addIngredientsHandler = ingredients => {
    setUseIngredients(prevIngredients => [
      ...prevIngredients, 
      {
        id : Math.random().toString(), ...ingredients
      }
    ])
  }

  return (
    <div className="App"> 
      <IngredientForm onAddIngredient={addIngredientsHandler} />

      <section>
        <Search />
          <IngredientList ingredients={useIngredients} onRemoveItem={() => {}}/>
      </section>
    </div>
  );
}

export default Ingredients;