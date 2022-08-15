import Card from './Card';
import './Card.css'

const Cards = ({recipes}) => {


    return(
        <div className = "cards">
            {recipes.map((meal,index)=>(
                <Card key = {index} url = {meal.strMealThumb} title = {meal.strMeal} recipe = {meal.idMeal}/>
            ))
            }
        </div>


    )
}

export default Cards;

