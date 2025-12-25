export default function CommentsList() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return (
    <div className="comments-wrap">
      <div id="comments" className="row">
        <div className="col-full">
          <h3>5 Comments</h3>
          <ol className="commentlist">
            <li className="depth-1">
              <div className="avatar">
                <img width="50" height="50" className="avatar" src={`${prefix}/images/avatars/user-01.jpg`} alt="" />
              </div>
              <div className="comment-content">
                <div className="comment-info">
                  <cite>Itachi Uchiha</cite>
                  <div className="comment-meta">
                    <time className="comment-time" dateTime="2014-07-12T23:05">Jul 12, 2014 @ 23:05</time>
                    <span className="sep">/</span>
                    <a className="reply" href="#">Reply</a>
                  </div>
                </div>
                <div className="comment-text">
                  <p>
                    Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate,
                    facilisi expetenda has et.
                  </p>
                </div>
              </div>
            </li>
            <li className="thread-alt depth-1">
              <div className="avatar">
                <img width="50" height="50" className="avatar" src={`${prefix}/images/avatars/user-04.jpg`} alt="" />
              </div>
              <div className="comment-content">
                <div className="comment-info">
                  <cite>John Doe</cite>
                  <div className="comment-meta">
                    <time className="comment-time" dateTime="2014-07-12T24:05">Jul 12, 2014 @ 24:05</time>
                    <span className="sep">/</span>
                    <a className="reply" href="#">Reply</a>
                  </div>
                </div>
                <div className="comment-text">
                  <p>
                    Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei.
                  </p>
                </div>
              </div>
              <ul className="children">
                <li className="depth-2">
                  <div className="avatar">
                    <img width="50" height="50" className="avatar" src={`${prefix}/images/avatars/user-03.jpg`} alt="" />
                  </div>
                  <div className="comment-content">
                    <div className="comment-info">
                      <cite>Kakashi Hatake</cite>
                      <div className="comment-meta">
                        <time className="comment-time" dateTime="2014-07-12T25:05">Jul 12, 2014 @ 25:05</time>
                        <span className="sep">/</span>
                        <a className="reply" href="#">Reply</a>
                      </div>
                    </div>
                    <div className="comment-text">
                      <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="depth-1">
              <div className="avatar">
                <img width="50" height="50" className="avatar" src={`${prefix}/images/avatars/user-02.jpg`} alt="" />
              </div>
              <div className="comment-content">
                <div className="comment-info">
                  <cite>Shikamaru Nara</cite>
                  <div className="comment-meta">
                    <time className="comment-time" dateTime="2014-07-12T25:15">July 12, 2014 @ 25:15</time>
                    <span className="sep">/</span>
                    <a className="reply" href="#">Reply</a>
                  </div>
                </div>
                <div className="comment-text">
                  <p>Typi non habent claritatem insitam; est usus legentis.</p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
