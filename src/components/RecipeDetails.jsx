import React from "react";
import Rating from "./Rating";
import Skeleton from "react-loading-skeleton";
import MessageBox from "./MessageBox";

const RecipeDetails=({ recipe, loading })=> {
    return (
      <div className="recipe-details">
        {recipe ? (<h2 style={{marginBottom:'16px'}} className="recipe-title">Recipe Details</h2>):!loading &&
            <MessageBox>No details to show</MessageBox>
        }
        <div className="recipe-header">
          {loading ? (
            <>
              <Skeleton width={300} height={200} />
              <div className="section">
                <Skeleton width={400} height={30} marginBottom='20px'/>
                <Skeleton width={150} height={20} />
                <Skeleton width={100} height={20} count={3} />
              </div>
            </>
          ) : recipe &&
            <>
              <img className="detail-image" src={recipe?.image} alt="Recipe" />
              <div className="section">
                <h2 className="recipe-title">{recipe?.name}</h2>
                <Rating rating={recipe?.rating} />
                <h3 className="section-title">Ingredients:</h3>
                <ul className="list">
                  {recipe?.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient}
                    </li>
                  ))}
                </ul>
                {recipe.tags.map((tag)=>(
                    <span className="tag">{tag}</span>
                ))}
              </div>
            </>
          }
        </div>
  
        <div className="section-bottom">
          {loading ? (
            <Skeleton width={600} height={30} count={2} />
          ) : recipe &&
                <>
                <h3 className="section-title">Preparation Steps:</h3>
              <p>
                {recipe.instructions}
              </p>
            </>
         } 
        </div>
      </div>
    );
  }
  
  export default RecipeDetails;
