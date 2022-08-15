import './App.css';
import HeaderP from './Pages/Header';
import Recipe from './components/Recipe';
import HomePage from './Pages/HomePage';
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";




function App() {


  const [categories, setCategories] = useState([]);
  const [untouchedRecipes, setUntouched] = useState([]);
  const [updateEffect, setUpdate] = useState(false);
    const [storedRecipe, setRecipe] = useState({
      recipes: {
        which: "",
        recipes: []
      }
    });
  
    console.log(updateEffect);

    const buildNewState = (propToModify, value) => {
      return {
        ...storedRecipe,
        recipes: {
          ...storedRecipe.recipes,
          [propToModify]: value
        }
      };
    };

  
    useEffect(() => {
      async function getRecipes() {
        const url = `https://themealdb.com/api/json/v1/1/search.php?s=${storedRecipe.recipes.which || "a"}`;
  
        if (storedRecipe.recipes.which.length >= 3 || !storedRecipe.recipes.which.length) {
  
        const {
          data: { meals: recipes }
        } = await axios(url);

  
        const newState = buildNewState("recipes", recipes);
        const newCategories = recipes;
        const untouched = recipes;
        console.log(untouched);
        const categoriesUniq = [];
  
        newCategories.forEach((meal)=>(
          categoriesUniq.includes(meal.strCategory) || categoriesUniq.push(meal.strCategory)
        ))
  
        setCategories(categoriesUniq);
        
        setUntouched(untouched);
        console.log(untouchedRecipes);
        setRecipe(newState);
      }
      }
      
      getRecipes();
     
    }, [storedRecipe.recipes.which, updateEffect]);

    

    const handleChange = (term) => {
      const newState = buildNewState("which", term);
  
      setRecipe(newState);
    
    };

    
    const initialRecipes = storedRecipe.recipes.recipes;
    

    const clickButton = (button)=> {

        button.className==="clicked" ? button.className="btn-grad" : button.className="clicked";
        

        const filteredRecipes = storedRecipe.recipes.recipes.filter(
          (filteredRecipe)=>{
            return filteredRecipe.strCategory===button.textContent
        })
        

        const filteredState = buildNewState("recipes", filteredRecipes);
        console.log(filteredRecipes);
       
        const initialState = buildNewState("recipes", initialRecipes);
      
        button.innerHTML==="all" ? setRecipe(initialState) : setRecipe(filteredState);
        console.log(storedRecipe.recipes.recipes);
        console.log(button.className);
        button.className==="clicked" ? console.log("filtered") : setUpdate(!updateEffect);
        console.log(updateEffect);
    };

  return (  
   
    <div className="App">
      
        <Routes>
        <Route path="/" element={<HeaderP onChange={handleChange} search={storedRecipe.recipes.which}/>}>
            <Route path="/" element={<HomePage categories = {categories} onClick={clickButton} recipes = {storedRecipe.recipes.recipes}/>} />
            <Route path="/recipes/:recipe" element={<Recipe recipes = {storedRecipe.recipes.recipes}/>} />
          </Route>  
        </Routes>   
    </div>
  );  
}

export default App;
