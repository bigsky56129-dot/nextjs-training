import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Home() {
  const BASE = import.meta.env.BASE_URL
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page') || 1)
  useEffect(() => {
    const $ = window.jQuery
    if (!$) return
    const containerBricks = $('.bricks-wrapper')
    if (!containerBricks.length) return
    const initOrLayout = () => {
      try {
        if (containerBricks.data('masonry')) {
          containerBricks.masonry('reloadItems')
          containerBricks.masonry('layout')
        } else {
          containerBricks.masonry({
            itemSelector: '.entry',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            resize: true,
          })
        }
        // Ensure FlexSlider initializes after mount (window load may have passed)
        try {
          const $featured = $('#featured-post-slider')
          if ($featured.length && typeof $featured.flexslider === 'function' && !$featured.data('flexslider')) {
            $featured.flexslider({
              namespace: 'flex-',
              controlsContainer: '',
              animation: 'fade',
              controlNav: false,
              directionNav: true,
              smoothHeight: false,
              slideshowSpeed: 7000,
              animationSpeed: 600,
              randomize: false,
              touch: true,
            })
          }
          const $postSliders = $('.post-slider')
          if ($postSliders.length && typeof $postSliders.flexslider === 'function') {
            $postSliders.each(function () {
              const $ps = $(this)
              if ($ps.data('flexslider')) return
              $ps.flexslider({
                namespace: 'flex-',
                controlsContainer: '',
                animation: 'fade',
                controlNav: true,
                directionNav: false,
                smoothHeight: false,
                slideshowSpeed: 7000,
                animationSpeed: 600,
                randomize: false,
                touch: true,
                start: function (slider) {
                  if (typeof slider.container === 'object') {
                    slider.container.on('click', function () {
                      if (!slider.animating) {
                        slider.flexAnimate(slider.getTarget('next'))
                      }
                    })
                  }
                  containerBricks.masonry('layout')
                },
              })
            })
          }
        } catch (e) {
          // ignore flexslider init errors
        }
        setTimeout(() => {
          $('.animate-this').each(function (ctr) {
            const el = $(this)
            setTimeout(() => {
              el.addClass('animated fadeInUp')
            }, ctr * 200)
          })
        }, 100)
      } catch (e) {
        // no-op: masonry may not be loaded yet
      }
    }
    if (typeof containerBricks.imagesLoaded === 'function') {
      containerBricks.imagesLoaded(initOrLayout)
    } else {
      initOrLayout()
    }
  }, [page])
  const totalPages = 9
  const go = (n) => {
    if (n < 1 || n > totalPages) return
    if (n === 1) setSearchParams({})
    else setSearchParams({ page: String(n) })
  }
  return (
    <section id="bricks">
      <div className="row masonry">
        <div className="bricks-wrapper">
          <div className="grid-sizer"></div>

          {/* Featured slider */}
          <div className="brick entry featured-grid animate-this">
            <div className="entry-content">
              <div id="featured-post-slider" className="flexslider">
                <ul className="slides">
                  <li>
                    <div className="featured-post-slide">
                      <div
                        className="post-background"
                        style={{ backgroundImage: `url('${BASE}images/thumbs/featured/featured-1.jpg')` }}
                      ></div>
                      <div className="overlay"></div>
                      <div className="post-content">
                        <ul className="entry-meta">
                          <li>September 06, 2016</li>
                          <li><a href="#0">Naruto Uzumaki</a></li>
                        </ul>
                          <h1 className="slide-title">
                            <a href="#/single-standard" title="">Minimalism Never Goes Out of Style</a>
                        </h1>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="featured-post-slide">
                      <div
                        className="post-background"
                        style={{ backgroundImage: `url('${BASE}images/thumbs/featured/featured-2.jpg')` }}
                      ></div>
                      <div className="overlay"></div>
                      <div className="post-content">
                        <ul className="entry-meta">
                          <li>August 29, 2016</li>
                          <li><a href="#0">Sasuke Uchiha</a></li>
                        </ul>
                          <h1 className="slide-title">
                            <a href="#/single-standard" title="">Enhancing Your Designs with Negative Space</a>
                        </h1>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="featured-post-slide">
                      <div
                        className="post-background"
                        style={{ backgroundImage: `url('${BASE}images/thumbs/featured/featured-3.jpg')` }}
                      ></div>
                      <div className="overlay"></div>
                      <div className="post-content">
                        <ul className="entry-meta">
                          <li>August 27, 2016</li>
                          <li><a href="#0" className="author">Naruto Uzumaki</a></li>
                        </ul>
                          <h1 className="slide-title">
                            <a href="#/single-standard" title="">Music Album Cover Designs for Inspiration</a>
                        </h1>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Standard post */}
          <article className="brick entry format-standard animate-this">
            <div className="entry-thumb">
                        <a href="#/single-standard" className="thumb-link">
                <img src={`${BASE}images/thumbs/diagonal-building.jpg`} alt="building" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#0">Design</a>
                    <a href="#0">Photography</a>
                  </span>
                </div>
                <h1 className="entry-title"><a href="#/single/standard">Just a Standard Format Post.</a></h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          {/* Another standard */}
          <article className="brick entry format-standard animate-this">
            <div className="entry-thumb">
                        <a href="#/single-standard" className="thumb-link">
                <img src={`${BASE}images/thumbs/ferris-wheel.jpg`} alt="ferris wheel" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#0">Design</a>
                    <a href="#0">UI</a>
                  </span>
                </div>
                <h1 className="entry-title"><a href="#/single/standard">This Is Another Standard Format Post.</a></h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          {/* Audio post */}
          <article className="brick entry format-audio animate-this">
            <div className="entry-thumb">
              <a href="#/single/audio" className="thumb-link">
                <img src={`${BASE}images/thumbs/concert.jpg`} alt="concert" />
              </a>
              <div className="audio-wrap">
                <audio id="player" src={`${BASE}media/AirReview-Landmarks-02-ChasingCorporate.mp3`} width="100%" height="42" controls></audio>
              </div>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#0">Design</a>
                    <a href="#0">Music</a>
                  </span>
                </div>
                <h1 className="entry-title"><a href="#/single/audio">This Is a Audio Format Post.</a></h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          {/* Quote */}
          <article className="brick entry format-quote animate-this">
            <div className="entry-thumb">
              <blockquote>
                <p>
                  Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.
                </p>
                <cite>Dieter Rams</cite>
              </blockquote>
            </div>
          </article>

          {/* Standard */}
          <article className="brick entry animate-this">
            <div className="entry-thumb">
                        <a href="#/single-standard" className="thumb-link">
                <img src={`${BASE}images/thumbs/shutterbug.jpg`} alt="Shutterbug" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#0">Photography</a>
                    <a href="#0">html</a>
                  </span>
                </div>
                <h1 className="entry-title"><a href="#/single/standard">Photography Skills Can Improve Your Graphic Design.</a></h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          {/* Another standard */}
          <article className="brick entry animate-this">
            <div className="entry-thumb">
                        <a href="#/single-standard" className="thumb-link">
                <img src={`${BASE}images/thumbs/usaf-rocket.jpg`} alt="USAF rocket" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#0">Branding</a>
                    <a href="#0">Mockup</a>
                  </span>
                </div>
                <h1 className="entry-title"><a href="#/single/standard">The 10 Golden Rules of Clean Simple Design.</a></h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          {/* Gallery slider */}
          <article className="brick entry format-gallery group animate-this">
            <div className="entry-thumb">
              <div className="post-slider flexslider">
                <ul className="slides">
                  <li>
                    <img src={`${BASE}images/thumbs/gallery/work1.jpg`} alt="work1" />
                  </li>
                  <li>
                    <img src={`${BASE}images/thumbs/gallery/work2.jpg`} alt="work2" />
                  </li>
                  <li>
                    <img src={`${BASE}images/thumbs/gallery/work3.jpg`} alt="work3" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#0">Branding</a>
                    <a href="#0">Wordpress</a>
                  </span>
                </div>
                <h1 className="entry-title"><a href="#/single/gallery">Workspace Design Trends and Ideas.</a></h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          {/* Link entry */}
          <article className="brick entry format-link animate-this">
            <div className="entry-thumb">
              <div className="link-wrap">
                <p>
                  Looking for affordable &amp; reliable web hosting? We recommend Dreamhost.
                </p>
                <cite>
                  <a target="_blank" rel="noreferrer" href="http://www.dreamhost.com/r.cgi?287326">http://www.dreamhost.com</a>
                </cite>
              </div>
            </div>
          </article>

          {/* Pattern */}
          <article className="brick entry animate-this">
            <div className="entry-thumb">
              <a href="#/single/standard" className="thumb-link">
                <img src={`${BASE}images/thumbs/diagonal-pattern.jpg`} alt="Pattern" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#0">Design</a>
                    <a href="#0">UI</a>
                  </span>
                </div>
                <h1 className="entry-title"><a href="#/single/standard">You Can See Patterns Everywhere.</a></h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          {/* Video */}
          <article className="brick entry format-video animate-this">
            <div className="entry-thumb video-image">
              <a href="http://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0&color=F64B39" data-lity>
                <img src={`${BASE}images/thumbs/ottawa-bokeh.jpg`} alt="bokeh" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#0">Design</a>
                    <a href="#0">Branding</a>
                  </span>
                </div>
                <h1 className="entry-title"><a href="#/single/video">This Is a Video Post Format.</a></h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          {/* Lighthouse */}
          <article className="brick entry animate-this">
            <div className="entry-thumb">
              <a href="#/single/standard" className="thumb-link">
                <img src={`${BASE}images/thumbs/lighthouse.jpg`} alt="Lighthouse" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#0">Photography</a>
                    <a href="#0">Design</a>
                  </span>
                </div>
                <h1 className="entry-title"><a href="#/single/standard">Breathtaking Photos of Lighthouses.</a></h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          {/* Liberty */}
          <article className="brick entry animate-this">
            <div className="entry-thumb">
              <a href="#/single/standard" className="thumb-link">
                <img src={`${BASE}images/thumbs/liberty.jpg`} alt="Liberty" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#0">Branding</a>
                    <a href="#0">html</a>
                  </span>
                </div>
                <h1 className="entry-title"><a href="#/single/standard">Designing With Black and White.</a></h1>
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
          <a href="#!" onClick={(e) => { e.preventDefault(); go(page - 1) }} className={`page-numbers prev ${page === 1 ? 'inactive' : ''}`}>Prev</a>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            n === page ? (
              <span key={n} className="page-numbers current">{n}</span>
            ) : (
              <a key={n} href="#!" onClick={(e) => { e.preventDefault(); go(n) }} className="page-numbers">{n}</a>
            )
          ))}
          <a href="#!" onClick={(e) => { e.preventDefault(); go(page + 1) }} className="page-numbers next">Next</a>
        </nav>
      </div>
    </section>
  )
}
