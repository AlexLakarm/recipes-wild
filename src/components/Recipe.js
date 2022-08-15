import { BrowserRouter as Routes, Route, Link, useParams } from 'react-router-dom';

const Recipe =({recipes})=> {

    const params = useParams();
    


    const instruction = recipes.find(recipe => recipe.idMeal===params.recipe);
    console.log(instruction);

    return(
        <div>
            <Link to="/"><button className='btn-grad'>Back</button></Link>
            <p>{params.recipe? params.recipe : "No recipe"}</p>
            <p>{instruction.strInstructions}</p>
        </div>
    )
}

export default Recipe;