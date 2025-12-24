export default function StyleGuide() {
  return (
    <div id="content-wrap" className="styles">
      <div className="row narrow add-bottom text-center">
        <div className="col-twelve tab-full">
          <h1>Style Guide</h1>
          <p>Examples below use theme’s classes for typography and alerts.</p>
        </div>
      </div>

      <div className="row half-bottom">
        <div className="col-six tab-full">
          <h3>Headings</h3>
          <h1>Heading One</h1>
          <h2>Heading Two</h2>
          <h3>Heading Three</h3>
          <h4>Heading Four</h4>
          <h5>Heading Five</h5>
        </div>
        <div className="col-six tab-full">
          <h3>Lists</h3>
          <ul>
            <li>Unordered list item</li>
            <li>Another item</li>
          </ul>
          <ol>
            <li>Ordered item one</li>
            <li>Item two</li>
          </ol>
        </div>
      </div>

      <div className="row">
        <div className="col-twelve">
          <h3>Alert Boxes</h3>
          <div className="alert-box ss-error hideit">
            <p>Error Message. Your Message Goes Here.</p>
            <i className="fa fa-times close"></i>
          </div>
          <div className="alert-box ss-success hideit">
            <p>Success Message. Your Message Goes Here.</p>
            <i className="fa fa-times close"></i>
          </div>
          <div className="alert-box ss-info hideit">
            <p>Info Message. Your Message Goes Here.</p>
            <i className="fa fa-times close"></i>
          </div>
          <div className="alert-box ss-notice hideit">
            <p>Notice Message. Your Message Goes Here.</p>
            <i className="fa fa-times close"></i>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-six tab-full">
          <h3>Block Quotes</h3>
          <blockquote cite="http://where-i-got-my-info-from.com">
            <p>
              Your work is going to fill a large part of your life, and the only way to be truly satisfied is
              to do what you believe is great work. And the only way to do great work is to love what you do.
              If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
            </p>
            <cite>
              <a href="#">Steve Jobs</a>
            </cite>
          </blockquote>
          <blockquote>
            <p>Good design is as little design as possible.</p>
            <cite>Dieter Rams</cite>
          </blockquote>
        </div>
        <div className="col-six tab-full">
          <h3>Code Block</h3>
          <pre><code>{`code {
  font-size: 1.4rem;
  margin: 0 .2rem;
  padding: .2rem .6rem;
  white-space: nowrap;
  background: #F1F1F1;
  border: 1px solid #E1E1E1;
  border-radius: 3px;
}`}</code></pre>
        </div>
      </div>

      <div className="row half-bottom">
        <div className="col-six tab-full">
          <h3>Buttons</h3>
          <p>
            <a className="button button-primary full-width" href="#">Primary Button</a>
            <a className="button full-width" href="#">Default Button</a>
          </p>
        </div>
        <div className="col-six tab-full">
          <h3>Tables</h3>
          <p>
            Be sure to use properly formed table markup with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> when building a <code>table</code>.
          </p>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Naruto Uzumaki</td>
                  <td>16</td>
                  <td>Male</td>
                  <td>Konoha</td>
                </tr>
                <tr>
                  <td>Sakura Haruno</td>
                  <td>16</td>
                  <td>Female</td>
                  <td>Konoha</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-six tab-full">
          <h3>Form Styles</h3>
          <form>
            <div>
              <label htmlFor="sampleInput">Your email</label>
              <input className="full-width" type="email" placeholder="test@mailbox.com" id="sampleInput" />
            </div>
            <div>
              <label htmlFor="sampleRecipientInput">Reason for contacting</label>
              <div className="ss-custom-select">
                <select className="full-width" id="sampleRecipientInput">
                  <option value="Option 1">Questions</option>
                  <option value="Option 2">Report</option>
                  <option value="Option 3">Others</option>
                </select>
              </div>
            </div>
            <label htmlFor="exampleMessage">Message</label>
            <textarea className="full-width" placeholder="Your message" id="exampleMessage"></textarea>
            <label className="add-bottom">
              <input type="checkbox" />
              <span className="label-text">Send a copy to yourself</span>
            </label>
            <input className="button-primary full-width-on-mobile" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}
