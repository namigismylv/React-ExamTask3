import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="row" id='headerRow'>
            <div className="col-4">
              <div className="header__left">
                <Link to="/">
                  <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" alt="" /></Link>
              </div>

            </div>
            <div className="col-4">

              <div className="header__middle">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link>Menu</Link>
                  </li>
                  <li>
                    <Link>Reservation</Link>
                  </li>
                  <li>
                    <Link>Gallery</Link>
                  </li>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="header__right">
                <Link to="/basket"><i class="fa-solid fa-cart-shopping"></i></Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header