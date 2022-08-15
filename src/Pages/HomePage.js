
import '../App.css';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import Cards from '../components/Cards';


const HomePage =({onChange, search, categories, onClick, recipes})=> {

    

    return(

    <header className="App-header">
        <Buttons categories = {categories} onClick={onClick}/>
        <Cards recipes = {recipes}/>
      </header>
    )
}

export default HomePage;