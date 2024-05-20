import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="row" id='headerRow'>
            <div className="col-6">
              <div className="header__left">
                <Link to="/">
                  <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" alt="" /></Link>
              </div>

            </div>
            <div className="col-6">

              <div className="header__middle">
                <ul>
                  <li>
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="products">Products</Link>
                  </li>
                  <li>
                    <Link to="add">Add</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header