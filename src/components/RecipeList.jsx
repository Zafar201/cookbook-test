import React from "react";
import Rating from "./Rating";
import LoadingList from "./LoadingList";
import MessageBox from "./MessageBox";

const RecipeList=({ recipes, onRecipeClick, selectedRecipe, loading })=> {
  return (
    <div className="recipe-list">
      {loading ? 
        <LoadingList /> :
        recipes.map((recipe) => (
          <div  onClick={() => onRecipeClick(recipe)} key={recipe.id} className={`recipe-item ${selectedRecipe?.id === recipe.id ? 'selected' : ''}`}>
            <img className="recipe-image" src={recipe.image} alt={recipe.name} />
            <div className="recipe-info">
              <h3 className="recipe-name">{recipe.name}</h3>
              <div className="tags">
                <Rating rating={recipe.rating} />
              </div>
            </div>
          </div>
        ))
      }
      {!loading && recipes.length === 0 && (<MessageBox>No data </MessageBox>)}
    </div>
  );
}

export default RecipeList;
