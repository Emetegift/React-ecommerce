import { NavLink, Outlet } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import  "../style/RootLayout.css"

export const RootLayout = () => {
  return (
    <div className="navbar">

        <header>
          {/* <h1>Gift Mart</h1> */}
            <nav className="links">

              {/* <input className="search" type="search"/> */}
                 
                <NavLink to ="/">Shop</NavLink>
                <NavLink to="register">Register</NavLink>
                <NavLink to="login">Login</NavLink>
                <NavLink to="cart"><ShoppingCart size={22}/></NavLink>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}
