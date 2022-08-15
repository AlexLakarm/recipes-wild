import './Card.css'
import heartblack from './assets/heartblack.png'
import heartred from './assets/heartred.png'
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import Recipe from './Recipe';
import App from '../App';


const Card =({url, title, recipe})=> {

    let clicked = false;

    const handleHeart = (e) => {
        
        console.log(clicked);
        clicked = !clicked;
        console.log(clicked);
        clicked ? e.target.src=heartred : e.target.src=heartblack;
    }
  
    return(
      
        <div className='card'>
            <h2 className = "card-title">{title}</h2>
            <img className = "card-heart" src={heartblack} onClick={handleHeart}></img>
            <Link to={`/recipes/${recipe}`}><img className = "card-img" src={url}></img></Link>
        </div>
       
    )
}

export default Card;