import React, { memo } from "react";
import Rating from "./Rating";
import LoadingList from "./LoadingList";
import MessageBox from "./MessageBox";

const RecipeList = memo(({ recipes, onRecipeClick, selectedRecipe, loading }) => {
    if (loading) return(
          <div className="recipe-list">
             <LoadingList />
         </div>
    ) 
    if (recipes.length === 0) return (
        <div className="recipe-list">
           <MessageBox>No Recipe found</MessageBox>
        </div>
    )

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div
                    onClick={() => onRecipeClick(recipe)}
                    key={recipe.id}
                    className={`recipe-item ${selectedRecipe?.id === recipe.id ? 'selected' : ''}`}
                >
                    <img className="recipe-image" src={recipe.image} alt={recipe.name} />
                    <div className="recipe-info">
                        <h3 className="recipe-name">{recipe.name}</h3>
                        <div className="tags">
                            <Rating rating={recipe.rating} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
});

export default RecipeList;