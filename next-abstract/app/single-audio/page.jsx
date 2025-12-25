"use client"
import { useEffect } from "react"

export default function SingleAudioPage() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""
  useEffect(() => {
    const el = document.getElementById("player2")
    if (!el) return
    try {
      if (window.MediaElementPlayer && !el.closest(".mejs-container")) {
        new window.MediaElementPlayer(el, {
          features: ["playpause", "progress", "current", "duration", "volume"],
          audioWidth: "100%",
          audioHeight: 42,
        })
      }
    } catch {}
  }, [])

  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <article className="format-audio">
            <div className="content-media">
              <div className="post-thumb">
                <img src={`${prefix}/images/thumbs/single/single-02.jpg`} alt="Concert" />
              </div>
              <div className="audio-wrap">
                <audio id="player2" src={`${prefix}/media/AirReview-Landmarks-02-ChasingCorporate.mp3`} width="100%" height="42" controls></audio>
              </div>
            </div>
            <div className="primary-content">
              <h1 className="entry-title">Hey, This Is an Audio Format Post.</h1>
              <ul className="entry-meta">
                <li className="date">October 09, 2015</li>
                <li className="cat"><a href="#0">Wordpress</a><a href="#0">Design</a></li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
