
import '../App.css';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import Cards from '../components/Cards';
import { Outlet } from 'react-router-dom';



const HeaderP =({onChange, search, categories, onClick, recipes})=> {

    

    return(

    <header className="App-header">
        <Header onChange={onChange} search={search} />
    <Outlet/>    
    </header>
    )
}

export default HeaderP;