
import Button from './Button';
import './Buttons.css'
import {useState} from "react";

const Buttons = ({categories, onClick}) => {

  //const [uniqRecipe, setUniqueRecipe] = useState([]);
  //const [toggle, setToggle] = useState(false);


    return(
        <>
            <button className="btn-grad" onClick = {(e)=>onClick(e.target)}>all</button>

            <div className='buttons'>
                {categories.map(
                    (category,index)=>(<Button key ={index} category={category} onClick={onClick}/>)
                )}
            </div>

        </>
    )
}

export default Buttons;