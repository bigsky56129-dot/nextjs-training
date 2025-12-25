import CommentsList from '../components/comments-list'
import CommentForm from '../components/comment-form'

export default function SingleStandard() {
  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <article>
            <div className="content-media">
              <div className="post-thumb">
                <img src={`${import.meta.env.BASE_URL}images/thumbs/featured/featured-1.jpg`} alt="Standard" />
              </div>
            </div>

            <div className="entry-primary">
              <h1 className="entry-title">Standard Format Post</h1>
              <ul className="entry-meta">
                <li className="date">Dec 24, 2025</li>
                <li className="cat"><a href="#/category">Photography</a></li>
              </ul>

              <div className="entry-content">
                <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi.</p>
                <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero.</p>
              </div>

              <p className="tags">
                <span>Tagged in :</span>
                <a href="#0">Photography</a>
                <a href="#0">Design</a>
              </p>

              <div className="author-profile">
                <img src={`${import.meta.env.BASE_URL}images/avatars/user-01.jpg`} alt="Author" />
                <p>Written by Author. Minimal demo profile to match the original template layout.</p>
              </div>

              <div className="pagenav group">
                <div className="prev"><a href="#/single-gallery"><span>Previous</span> Gallery Format Post</a></div>
                <div className="next"><a href="#/single-video"><span>Next</span> Video Format Post</a></div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="comments-wrap">
        <div id="comments" className="row">
          <div className="col-full">
            <CommentsList />
            <CommentForm />
          </div>
        </div>
      </div>
    </section>
  )
}
