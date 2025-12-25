"use client"
import Link from "next/link"
import { useEffect } from "react"

export default function CategoryPage() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

  useEffect(() => {
    try {
      const $ = window.jQuery
      // Masonry for category grid
      if ($ && $.fn && $.fn.masonry && $.fn.imagesLoaded) {
        const $grid = $(".bricks-wrapper")
        if ($grid.length) {
          $grid.imagesLoaded(() => {
            $grid.masonry({
              itemSelector: ".brick",
              columnWidth: ".grid-sizer",
              percentPosition: true,
            })
          })
        }
      }
      // FlexSlider for gallery items
      if ($ && $.fn && $.fn.flexslider) {
        $(".post-slider.flexslider").flexslider({
          animation: "slide",
          controlNav: true,
          directionNav: true,
          slideshow: true,
        })
      }
      // Audio player
      const audioEl = document.getElementById("player2")
      if (audioEl && window.MediaElementPlayer && !audioEl.closest(".mejs-container")) {
        new window.MediaElementPlayer(audioEl, {
          features: ["playpause", "progress", "current", "duration", "volume"],
          audioWidth: "100%",
          audioHeight: 42,
        })
      }
    } catch {}
  }, [])

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
            <div className="grid-sizer"></div>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/single-standard/" className="thumb-link">
                  <img src={`${prefix}/images/thumbs/diagonal-building.jpg`} alt="building" />
                </Link>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Design</a>
                      <a href="#">Photography</a>
                    </span>
                  </div>
                  <h1 className="entry-title">
                    <Link href="/single-standard/">Just a Standard Format Post.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/single-standard/" className="thumb-link">
                  <img src={`${prefix}/images/thumbs/ferris-wheel.jpg`} alt="ferris wheel" />
                </Link>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Design</a>
                      <a href="#">UI</a>
                    </span>
                  </div>
                  <h1 className="entry-title">
                    <Link href="/single-standard/">This Is Another Standard Format Post.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-audio animate-this">
              <div className="entry-thumb">
                <Link href="/single-audio/" className="thumb-link">
                  <img src={`${prefix}/images/thumbs/concert.jpg`} alt="concert" />
                </Link>
                <div className="audio-wrap">
                  <audio id="player2" src={`${prefix}/media/AirReview-Landmarks-02-ChasingCorporate.mp3`} width="100%" height="42" controls="controls"></audio>
                </div>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Design</a>
                      <a href="#">Music</a>
                    </span>
                  </div>
                  <h1 className="entry-title">
                    <Link href="/single-audio/">This Is a Audio Format Post.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-quote animate-this">
              <div className="entry-thumb">
                <blockquote>
                  <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>
                  <cite>Dieter Rams</cite>
                </blockquote>
              </div>
            </article>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/single-standard/" className="thumb-link">
                  <img src={`${prefix}/images/thumbs/shutterbug.jpg`} alt="Shutterbug" />
                </Link>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Photography</a>
                      <a href="#">html</a>
                    </span>
                  </div>
                  <h1 className="entry-title">
                    <Link href="/single-standard/">Photography Skills Can Improve Your Graphic Design.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/single-standard/" className="thumb-link">
                  <img src={`${prefix}/images/thumbs/usaf-rocket.jpg`} alt="USAF rocket" />
                </Link>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Branding</a>
                      <a href="#">Mockup</a>
                    </span>
                  </div>
                  <h1 className="entry-title">
                    <Link href="/single-standard/">The 10 Golden Rules of Clean Simple Design.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-gallery group animate-this">
              <div className="entry-thumb">
                <div className="post-slider flexslider">
                  <ul className="slides">
                    <li>
                      <img src={`${prefix}/images/thumbs/gallery/work1.jpg`} alt="work1" />
                    </li>
                    <li>
                      <img src={`${prefix}/images/thumbs/gallery/work2.jpg`} alt="work2" />
                    </li>
                    <li>
                      <img src={`${prefix}/images/thumbs/gallery/work3.jpg`} alt="work3" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Branding</a>
                      <a href="#">Wordpress</a>
                    </span>
                  </div>
                  <h1 className="entry-title">
                    <Link href="/single-gallery/">Workspace Design Trends and Ideas.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-link animate-this">
              <div className="entry-thumb">
                <div className="link-wrap">
                  <p>Looking for affordable &amp; reliable web hosting? We recommend Dreamhost.</p>
                  <cite>
                    <a target="_blank" href="http://www.dreamhost.com/r.cgi?287326">http://www.dreamhost.com</a>
                  </cite>
                </div>
              </div>
            </article>

            <article className="brick entry animate-this">
              <div className="entry-thumb">
                <Link href="/single-standard/" className="thumb-link">
                  <img src={`${prefix}/images/thumbs/diagonal-pattern.jpg`} alt="Pattern" />
                </Link>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Design</a>
                      <a href="#">UI</a>
                    </span>
                  </div>
                  <h1 className="entry-title">
                    <Link href="/single-standard/">You Can See Patterns Everywhere.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-video animate-this">
              <div className="entry-thumb video-image">
                <a href="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" data-lity>
                  <img src={`${prefix}/images/thumbs/ottawa-bokeh.jpg`} alt="bokeh" />
                </a>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Design</a>
                      <a href="#">Branding</a>
                    </span>
                  </div>
                  <h1 className="entry-title">
                    <Link href="/single-video/">This Is a Video Post Format.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/single-standard/" className="thumb-link">
                  <img src={`${prefix}/images/thumbs/lighthouse.jpg`} alt="Lighthouse" />
                </Link>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Photography</a>
                      <a href="#">Design</a>
                    </span>
                  </div>
                  <h1 className="entry-title">
                    <Link href="/single-standard/">Breathtaking Photos of Lighthouses.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>

            <article className="brick entry format-standard animate-this">
              <div className="entry-thumb">
                <Link href="/single-standard/" className="thumb-link">
                  <img src={`${prefix}/images/thumbs/liberty.jpg`} alt="Liberty" />
                </Link>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">Branding</a>
                      <a href="#">html</a>
                    </span>
                  </div>
                  <h1 className="entry-title">
                    <Link href="/single-standard/">Designing With Black and White.</Link>
                  </h1>
                </div>
                <div className="entry-excerpt">
                  Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="row">
          <nav className="pagination">
            <span className="page-numbers prev inactive">Prev</span>
            <span className="page-numbers current">1</span>
            <a href="#" className="page-numbers">2</a>
            <a href="#" className="page-numbers">3</a>
            <a href="#" className="page-numbers">4</a>
            <a href="#" className="page-numbers">5</a>
            <a href="#" className="page-numbers">6</a>
            <a href="#" className="page-numbers">7</a>
            <a href="#" className="page-numbers">8</a>
            <a href="#" className="page-numbers">9</a>
            <a href="#" className="page-numbers next">Next</a>
          </nav>
        </div>
      </section>
    </>
  )
}
