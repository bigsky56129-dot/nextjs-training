import Link from "next/link"
import CommentsList from "../../components/CommentsList"
import CommentForm from "../../components/CommentForm"

export default function Page() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <article className="format-standard">
            <div className="content-media">
              <div className="post-thumb">
                <img src={`${prefix}/images/thumbs/single/single-01.jpg`} alt="Standard" />
              </div>
            </div>
            <div className="primary-content">
              <h1 className="page-title">Hey, This Is A Standard Format Post.</h1>
              <ul className="entry-meta">
                <li className="date">September 06, 2016</li>
                <li className="cat">
                  <a href="#0">Wordpress</a>
                  <a href="#0">Design</a>
                </li>
              </ul>
              <p className="lead">
                Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu
                exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit
                commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non
                laborum adipisicing aliqua ea nisi sint.
              </p>
              <p>
                Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu
                exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit
                commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non
                laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim
                cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim
                aliqua laborum mollit quis nostrud sed sed.
              </p>
              <p>
                <img src={`${prefix}/images/shutterbug.jpg`} alt="" />
              </p>
              <h2>Large Heading</h2>
              <p>
                Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                cumque nihil impedit quo minus <a href="http://#">omnis voluptas assumenda est</a> id quod maxime placeat facere
                possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et.
              </p>
              <blockquote>
                <p>
                  This is a simple example of a styled blockquote. A blockquote tag typically specifies a section that is quoted
                  from another source of some sort, or highlighting text in your post.
                </p>
              </blockquote>
              <p>
                Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare
                sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut
                dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua
                laborum mollit quis nostrud sed sed..
              </p>
              <h3>Smaller Heading</h3>
              <p>
                Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                repellendus.
              </p>
              <p>
                Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                repellendus.
              </p>
              <pre>
                <code>
                  {`code {\n   font-size: 1.4rem;\n   margin: 0 .2rem;\n   padding: .2rem .6rem;\n   white-space: nowrap;\n   background: #F1F1F1;\n   border: 1px solid #E1E1E1;\n   border-radius: 3px;\n}`}
                </code>
              </pre>
              <p>
                Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa.
              </p>
              <ul>
                <li>
                  Donec nulla non metus auctor fringilla.
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </li>
                <li>Donec nulla non metus auctor fringilla.</li>
                <li>Donec nulla non metus auctor fringilla.</li>
              </ul>
              <p>
                Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare
                sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut
                dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua
                laborum mollit quis nostrud sed sed..
              </p>
              <p className="tags">
                <span>Tagged in :</span>
                <a href="#0">orci</a>
                <a href="#0">lectus</a>
                <a href="#0">varius</a>
                <a href="#0">turpis</a>
              </p>
              <div className="author-profile">
                <img src={`${prefix}/images/avatars/user-05.jpg`} alt="" />
                <div className="about">
                  <h4>
                    <a href="#0">Jonathan Smith</a>
                  </h4>
                  <p>
                    Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime
                    nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                  <ul className="author-social">
                    <li>
                      <a href="#0">Facebook</a>
                    </li>
                    <li>
                      <a href="#0">Twitter</a>
                    </li>
                    <li>
                      <a href="#0">GooglePlus</a>
                    </li>
                    <li>
                      <a href="#0">Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pagenav group">
              <div className="prev-nav">
                <Link href="/single-gallery/" rel="prev">
                  <span>Previous</span>
                  Tips on Minimalist Design
                </Link>
              </div>
              <div className="next-nav">
                <Link href="/single-video/" rel="next">
                  <span>Next</span>
                  Less Is More
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      <CommentsList />
      <div className="row">
        <div className="col-full">
          <CommentForm />
        </div>
      </div>
    </section>
  )
}
