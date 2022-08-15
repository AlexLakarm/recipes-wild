
import './Buttons.css'

const Button =({category, onClick})=> {

    
    return(
        <>
            
            <button className="btn-grad" onClick = {(e)=>onClick(e.target)}>{category}</button>
        </>

    )
}

export default Button;