export default function SingleVideo() {
  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <article>
            <div className="content-media">
              <div className="post-thumb">
                <div className="fluid-video-wrapper">
                  <iframe
                    src="https://player.vimeo.com/video/1084537?title=0&byline=0&portrait=0"
                    width="640"
                    height="360"
                    frameBorder="0"
                    webkitAllowFullScreen
                    mozAllowFullScreen
                    allowFullScreen
                    title="Embedded Video"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="entry-primary">
              <h1 className="entry-title">Video Format Post</h1>
              <ul className="entry-meta">
                <li className="date">Dec 24, 2025</li>
                <li className="cat"><a href="#/category">Motion</a></li>
              </ul>

              <div className="entry-content">
                <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias.</p>
                <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
              </div>

              <p className="tags">
                <span>Tagged in :</span>
                <a href="#0">Video</a>
                <a href="#0">Motion</a>
              </p>

              <div className="author-profile">
                <img src={`${import.meta.env.BASE_URL}images/avatars/user-04.jpg`} alt="Author" />
                <p>Videographer bio snippet to match the template.</p>
              </div>

              <div className="pagenav group">
                <div className="prev"><a href="#/single-standard"><span>Previous</span> Standard Format Post</a></div>
                <div className="next"><a href="#/single/audio"><span>Next</span> Audio Format Post</a></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
