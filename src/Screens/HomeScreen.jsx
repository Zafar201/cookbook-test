import React, { useEffect, useState } from 'react';
import RecipeList from '../components/RecipeList';
import RecipeDetails from '../components/RecipeDetails';
import FilterComponent from '../components/Filter';
import { debounce } from 'lodash';

function HomeScreen() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes?limit=7');
        const data = await response.json();
        setRecipes(data.recipes);        
        setSelectedRecipe(data.recipes[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

       // Debounced search function to prevent excessive API calls
    const debouncedFetch = debounce(async (term) => {
        setLoading(true)
          const response = await fetch(`https://dummyjson.com/recipes/search?q=${term}&limit=7`);
          const data = await response.json();
          setRecipes(data.recipes);
          setSelectedRecipe(data.recipes[0]);
          setLoading(false)

    }, 1000);// 1 second delay

    const handleSearch = (term) => {
        setSearchTerm(term); 
        debouncedFetch(term); 
    };

    // Handles sorting of recipes based on the name
    const handleSort = (field) => {
     // Toggle sort order if the same field is selected
      setSortBy(field);
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      const sorted = [...recipes].sort((a, b) => {
        if (a[field] < b[field]) return sortOrder === 'asc' ? -1 : 1;
        if (a[field] > b[field]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
      setRecipes(sorted);
    };

    const handleRecipeClick = (recipe) => {
      setSelectedRecipe(recipe);
    };

    return (
      <div>
        <FilterComponent searchTerm={searchTerm} onSearch={handleSearch} sortBy={sortBy}sortOrder={sortOrder}onSort={handleSort} />
        <div className="content">
          <RecipeList recipes={recipes} selectedRecipe={selectedRecipe} onRecipeClick={handleRecipeClick} loading={loading}/>
          <RecipeDetails recipe={selectedRecipe} loading={loading}/>
        </div>
      </div>
    );
}

export default HomeScreen;
