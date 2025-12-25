import Link from "next/link"
import "./header.css"

export default function Header() {
  return (
    <header className="short-header">
      <div className="gradient-block"></div>
      <div className="row header-content">
        <div className="logo">
          <Link href="/">Author</Link>
        </div>
        <nav id="main-nav-wrap">
          <ul className="main-navigation sf-menu">
            <li className="current">
              <Link href="/" title="">Home</Link>
            </li>
            <li className="has-children">
              <Link href="/category/" title="">Categories</Link>
              <ul className="sub-menu">
                <li><Link href="/category/">Wordpress</Link></li>
                <li><Link href="/category/">HTML</Link></li>
                <li><Link href="/category/">Photography</Link></li>
                <li><Link href="/category/">UI</Link></li>
                <li><Link href="/category/">Mockups</Link></li>
                <li><Link href="/category/">Branding</Link></li>
              </ul>
            </li>
            <li className="has-children">
              <Link href="/single-standard/" title="">Blog</Link>
              <ul className="sub-menu">
                <li><Link href="/single-video/">Video Post</Link></li>
                <li><Link href="/single-audio/">Audio Post</Link></li>
                <li><Link href="/single-gallery/">Gallery Post</Link></li>
                <li><Link href="/single-standard/">Standard Post</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/style-guide/" title="">Styles</Link>
            </li>
            <li>
              <Link href="/about/" title="">About</Link>
            </li>
            <li>
              <Link href="/contact/" title="">Contact</Link>
            </li>
            <li>
              <Link href="/login" title="">Login</Link>
            </li>
          </ul>
        </nav>
        <div className="search-wrap">
          <form role="search" method="get" className="search-form" action="#">
            <label>
              <span className="hide-content">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Type Your Keywords"
                name="s"
                title="Search for:"
                autoComplete="off"
              />
            </label>
            <input type="submit" className="search-submit" value="Search" />
          </form>
          <a href="#" id="close-search" className="close-btn">Close</a>
        </div>
        <div className="triggers">
          <a className="search-trigger" href="#">
            <i className="fa fa-search"></i>
          </a>
          <a className="menu-toggle" href="#">
            <span>Menu</span>
          </a>
        </div>
      </div>
    </header>
  )
}
