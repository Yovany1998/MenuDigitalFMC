//import '../../css/NavBar.css';
import '../../css/NavBar.css';
import {Link} from "react-router-dom";
function NavBar() {
    return(
    <nav className=" flex-row justify-between p-2">
        
        <div  className="items-center hidden sm:flex flex-row justify-between px-2" >
        <Link to={"/"}> <div className="LogoNasa  w-20 h-20 " ></div> </Link>
            <div className="Paginas sm:w-100 sm:px-4 md:w-80  flex justify-between" >
                <Link to={"/acercade"} className="Opcion sm:text-lg md:text-2xl" >Acerca de Nosotros</Link>
               <Link to={"/galeria"} className="Opcion sm:text-lg md:text-2xl" >Mas informacion</Link>
            </div>
        </div>

        <div className="sm:hidden items-center  flex flex-row justify-between p-2" id="mobile-menu">
            <Link to={"/"} > 
            <div className="LogoNasa  w-40 h-40 " ></div>
            </Link>

            <div className="Dropdown ">
                <button className=" py-2 px-4 rounded inline-flex items-center">
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </button>
                <ul className="DropdownMenu absolute hidden t-1">
                    <li><Link to={"/acercade"} className="DropdownOpcion rounded-t py-2 px-4 block whitespace-no-wrap" href="#">Acerca de FMC</Link></li>
                    {/* <li><Link to={"/"} className="DropdownOpcion py-2 px-4 block whitespace-no-wrap" href="#">Inicio</Link></li> */}
                </ul>
            </div>
            
        </div>
    </nav>
    )
}

export default NavBar;