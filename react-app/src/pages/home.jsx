export default function Home() {
  return (
    <section id="bricks">
      <div className="row masonry">
        <div className="bricks-wrapper">
          <h1 style={{ padding: '2rem 1rem' }}>Welcome to Abstract (React)</h1>
          <p style={{ padding: '0 1rem 2rem' }}>This is the React-converted home page. You can add your masonry posts here by turning original HTML bricks into React components.</p>
        </div>
      </div>
      <div className="row">
        <nav className="pagination">
          <span className="page-numbers prev inactive">Prev</span>
          <span className="page-numbers current">1</span>
          <a href="#0" className="page-numbers">2</a>
          <a href="#0" className="page-numbers">Next</a>
        </nav>
      </div>
    </section>
  )
}
