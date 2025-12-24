import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="short-header">
      <div className="gradient-block"></div>
      <div className="row header-content">
        <div className="logo">
          <Link to="/">Author</Link>
        </div>
        <nav id="main-nav-wrap">
          <ul className="main-navigation sf-menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li className="has-children">
              <a href="#0" title="">Blog</a>
              <ul className="sub-menu">
                <li><NavLink to="/single/standard">Standard</NavLink></li>
                <li><NavLink to="/single/video">Video</NavLink></li>
                <li><NavLink to="/single/audio">Audio</NavLink></li>
                <li><NavLink to="/single/gallery">Gallery</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/category">Category</NavLink></li>
            <li><NavLink to="/style-guide">Styles</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="triggers">
          <a className="menu-toggle" href="#0"><span>Menu</span></a>
        </div>
      </div>
    </header>
  )
}
