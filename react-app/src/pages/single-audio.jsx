export default function SingleAudio() {
  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <article>
            <div className="content-media">
              <div className="post-thumb">
                <div className="audio-wrap">
                  <audio controls style={{ width: '100%' }}>
                    <source src={`${import.meta.env.BASE_URL}media/sample.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>

            <div className="entry-primary">
              <h1 className="entry-title">Audio Format Post</h1>
              <ul className="entry-meta">
                <li className="date">Dec 24, 2025</li>
                <li className="cat"><a href="#/category">Music</a></li>
              </ul>

              <div className="entry-content">
                <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias.</p>
                <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                <ul>
                  <li>Donec nulla non metus auctor fringilla.</li>
                  <li>Praesent commodo cursus magna, vel scelerisque nisl.</li>
                  <li>Etiam porta sem malesuada magna mollis euismod.</li>
                </ul>
              </div>

              <p className="tags">
                <span>Tagged in :</span>
                <a href="#0">Audio</a>
                <a href="#0">Podcast</a>
              </p>

              <div className="author-profile">
                <img src={`${import.meta.env.BASE_URL}images/avatars/user-03.jpg`} alt="Author" />
                <p>Musician bio snippet to match the template.</p>
              </div>

              <div className="pagenav group">
                <div className="prev"><a href="#/single/video"><span>Previous</span> Video Format Post</a></div>
                <div className="next"><a href="#/single/gallery"><span>Next</span> Gallery Format Post</a></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
