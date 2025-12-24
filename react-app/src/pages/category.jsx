export default function Category() {
  return (
    <>
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            <h1>Category: Photography</h1>
          </div>
        </div>
      </section>
      <section id="bricks" className="with-top-sep">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <p style={{ padding: '2rem 1rem' }}>Add your category masonry items here.</p>
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
    </>
  )
}
