import { Link } from 'react-router-dom'

export default function FooterNav({ title = 'Site Links', items = [] }) {
  const list = items.length
    ? items
        : [
            { label: 'About Us', to: '/about' },
            { label: 'Blog', to: '/single-standard' },
            { label: 'FAQ', to: '/style-guide' },
            { label: 'Terms', to: '/style-guide' },
            { label: 'Privacy Policy', to: '/style-guide' },
          ]

  return (
    <div className="col-two tab-1-3 mob-1-2 site-links">
      <h4>{title}</h4>
      <ul>
        {list.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <a href={item.href || '#0'}>{item.label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
