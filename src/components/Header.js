import logo from './assets/Logo.svg';
import './Header.css';
import SearchBar from './SearchBar';



const Header =({search, onChange})=> {


return(

    <div className='header'>
        <img src={logo}></img>
        <SearchBar search = {search} onChange={onChange}/>
     
    </div>


)
};


export default Header;