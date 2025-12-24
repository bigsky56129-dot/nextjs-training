export default function SingleGallery() {
  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <article>
            <div className="content-media">
              <div className="post-thumb">
                <img src={`${import.meta.env.BASE_URL}images/thumbs/gallery/work1.jpg`} alt="Gallery" />
              </div>
            </div>

            <div className="entry-primary">
              <h1 className="entry-title">Gallery Format Post</h1>
              <ul className="entry-meta">
                <li className="date">Dec 24, 2025</li>
                <li className="cat"><a href="#/category">Photography</a></li>
              </ul>

              <div className="entry-content">
                <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias.</p>
                <div className="row">
                  <div className="col-six tab-full"><img src={`${import.meta.env.BASE_URL}images/thumbs/single/gallery/single-gallery-01.jpg`} alt="Gallery 1" /></div>
                  <div className="col-six tab-full"><img src={`${import.meta.env.BASE_URL}images/thumbs/single/gallery/single-gallery-02.jpg`} alt="Gallery 2" /></div>
                </div>
                <div className="row">
                  <div className="col-six tab-full"><img src={`${import.meta.env.BASE_URL}images/thumbs/single/gallery/single-gallery-03.jpg`} alt="Gallery 3" /></div>
                </div>
              </div>

              <p className="tags">
                <span>Tagged in :</span>
                <a href="#0">Gallery</a>
                <a href="#0">Images</a>
              </p>

              <div className="author-profile">
                <img src={`${import.meta.env.BASE_URL}images/avatars/user-02.jpg`} alt="Author" />
                <p>Photographer bio snippet to match the template.</p>
              </div>

              <div className="pagenav group">
                <div className="prev"><a href="#/single/audio"><span>Previous</span> Audio Format Post</a></div>
                <div className="next"><a href="#/single/standard"><span>Next</span> Standard Format Post</a></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
