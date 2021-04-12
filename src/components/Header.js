import {NavLink as NavLink} from "react-router-dom";


export default function Header() {
    return (
        <div className="Header">
            <h1>Rick and Morty</h1>
            <NavBar />
        </div> 
    )
}

function NavBar(){
    return(
        <nav className="nav">
            <NavLink className="NavLink1" exact to="/">Home</NavLink>
            <NavLink className="NavLink2" exact to="/character">Characters</NavLink>
        </nav>
    )
  }