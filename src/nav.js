import logo from './logo.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./App.css"

export default  function Navbar(){
    return(
        <nav className="nav1">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/components/Home" className="Items">Home</CustomLink>
        <CustomLink to="/components/Contact" className="Items">Contact</CustomLink>
        <CustomLink to="/components/About" className="Items">About</CustomLink>
      </ul>
    </nav>
  )
}
function CustomLink({to, children, ...props})
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )  
}
