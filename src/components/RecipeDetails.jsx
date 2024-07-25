import React, { memo } from "react";
import Rating from "./Rating";
import Skeleton from "react-loading-skeleton";
import MessageBox from "./MessageBox";

const RecipeDetails = memo(({ recipe, loading }) => {
    if (loading) {
        return (
            <div className="recipe-details">
              <div className="recipe-header">
                <Skeleton width={300} height={200} />
                <div className="section">
                    <Skeleton width={400} height={30} style={{ marginBottom: '20px' }} />
                    <Skeleton width={150} height={20} />
                    <Skeleton width={100} height={20} count={3} />
                </div>
            
            </div>
                <div className="section-bottom">
                    <Skeleton width={600} height={30} count={2} />
                </div>
            </div>
        );
    }

    if (!recipe) {
        return(
            <div className="recipe-details">
             <MessageBox>No details to show</MessageBox>
             </div>
        ) 
    }

    return (
        <div className="recipe-details">
            <h2 style={{ marginBottom: '16px' }} className="recipe-title">Recipe Details</h2>
            <div className="recipe-header">
                <img className="detail-image" src={recipe.image} alt={recipe.name} />
                <div className="section">
                    <h2 className="recipe-title">{recipe.name}</h2>
                    <Rating rating={recipe.rating} />
                    <h3 className="section-title">Ingredients:</h3>
                    <ul className="list">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    {recipe.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="section-bottom">
                <h3 className="section-title">Preparation Steps:</h3>
                <p>{recipe.instructions}</p>
            </div>
        </div>
    );
});

export default RecipeDetails;
