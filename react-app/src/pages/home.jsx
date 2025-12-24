export default function Home() {
  return (
    <section id="bricks">
      <div className="row masonry">
        <div className="bricks-wrapper">
          <div className="grid-sizer"></div>

          <article className="brick entry format-standard animate-this">
            <div className="entry-thumb">
              <a href="#/single/standard" className="thumb-link">
                <img src={`${import.meta.env.BASE_URL}images/thumbs/featured/featured-1.jpg`} alt="Standard" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <h1 className="entry-title"><a href="#/single/standard">Standard Format Post</a></h1>
                <div className="entry-meta">
                  <span className="date">Dec 24, 2025</span>
                  <span className="cat-links"><a href="#/category">Photography</a></span>
                </div>
              </div>
              <div className="entry-excerpt">Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores.</div>
            </div>
          </article>

          <article className="brick entry format-gallery animate-this">
            <div className="entry-thumb">
              <a href="#/single/gallery" className="thumb-link">
                <img src={`${import.meta.env.BASE_URL}images/thumbs/gallery/work1.jpg`} alt="Gallery" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <h1 className="entry-title"><a href="#/single/gallery">Gallery Format Post</a></h1>
                <div className="entry-meta">
                  <span className="date">Dec 24, 2025</span>
                  <span className="cat-links"><a href="#/category">Photography</a></span>
                </div>
              </div>
              <div className="entry-excerpt">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</div>
            </div>
          </article>

          <article className="brick entry format-audio animate-this">
            <div className="entry-thumb">
              <a href="#/single/audio" className="thumb-link">
                <img src={`${import.meta.env.BASE_URL}images/thumbs/featured/featured-2.jpg`} alt="Audio" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <h1 className="entry-title"><a href="#/single/audio">Audio Format Post</a></h1>
                <div className="entry-meta">
                  <span className="date">Dec 24, 2025</span>
                  <span className="cat-links"><a href="#/category">Music</a></span>
                </div>
              </div>
              <div className="entry-excerpt">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.</div>
            </div>
          </article>

          <article className="brick entry format-video animate-this">
            <div className="entry-thumb">
              <a href="#/single/video" className="thumb-link">
                <img src={`${import.meta.env.BASE_URL}images/thumbs/featured/featured-3.jpg`} alt="Video" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <h1 className="entry-title"><a href="#/single/video">Video Format Post</a></h1>
                <div className="entry-meta">
                  <span className="date">Dec 24, 2025</span>
                  <span className="cat-links"><a href="#/category">Motion</a></span>
                </div>
              </div>
              <div className="entry-excerpt">Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus.</div>
            </div>
          </article>
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
