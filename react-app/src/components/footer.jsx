import FooterNav from './footer-nav'

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="row">
          <div className="col-four tab-full mob-full footer-info">
            <h4>About Our Site</h4>
            <p>Abstract theme running on React. Links below are placeholders to match original template structure.</p>
          </div>
            <FooterNav
              title="Site Links"
              items={[
                { label: 'About Us', to: '/about' },
                { label: 'Blog', to: '/single-standard' },
                { label: 'FAQ', to: '/style-guide' },
                { label: 'Terms', to: '/style-guide' },
                { label: 'Privacy Policy', to: '/style-guide' },
              ]}
            />
          <div className="col-two tab-1-3 mob-1-2 social-links">
            <h4>Follow</h4>
            <ul>
              <li><a href="#0">Twitter</a></li>
              <li><a href="#0">Facebook</a></li>
              <li><a href="#0">Instagram</a></li>
            </ul>
          </div>
          <div className="col-four tab-1-3 mob-full footer-subscribe">
            <h4>Subscribe</h4>
            <p>Subscribe to stay in the loop. (Static example)</p>
            <div className="subscribe-form">
              <form id="mc-form" className="group" noValidate>
                <input type="email" className="email" placeholder="Email Address" required />
                <input type="submit" value="Send" />
                <label htmlFor="mc-email" className="subscribe-message"></label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <div className="col-twelve">
            <div className="copyright">
              <span>© {new Date().getFullYear()} Abstract React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
