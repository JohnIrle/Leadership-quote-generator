import React from 'react';

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="http://github.com/JohnIrle">John Irle</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="..">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="../#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="../#portfolio">Portfolio</a></li>
          <li className="nav-item"><a className="nav-link" href="../#contact">Contact</a></li>
          <li className="nav-item"><a className="nav-link" href="http://johnirle.com/blog/" >Blog</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;