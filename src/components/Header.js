import {BrowserRouter as NavLink} from "react-router-dom";
import Characters from './components/Characters'

export default function Header() {
    return (
        <div>
            <h1>Rick and Mortey</h1>
            <NavBar />
        </div> 
    )
}

function NavBar(){
    return(
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/Characters">Characters</NavLink>
      </nav>
    )
  }