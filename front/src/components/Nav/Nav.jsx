import SearchBar from '../SearchBar/SearchBar';
import { Link, NavLink } from 'react-router-dom';


const Nav = ({onSearch}) => {
    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
            
            <Link to='/about'>
                <button> SOBRE MI </button>
            </Link>

            <NavLink to='/home'>
                <button> INICIO </button>
            </NavLink>
        </nav>
    )
};
export default Nav;