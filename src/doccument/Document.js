import React, { Component } from 'react'
import './Doc.css'
export default class Document extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrap1">
          <h5>Tích hợp liên kết dưới đây vào trang web của bạn </h5>
          <figure class="highlight">
            <pre>
              {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script> */}
              <code class="language-html" data-lang="html">
                <span class="nt">&lt;script </span>
                {/* <span class="na">rel=</span> */}
                {/* <span class="s">"stylesheet"</span> */}
                <span class="na">src=</span>
                <span class="s">"https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"</span>
                <span class="nt">&gt;</span>
                <span class="nt">&lt;/script</span>
                <span class="nt">&gt;</span>
              </code>
            </pre>
          </figure>
          {/* <script src="https://gcovid.tk/index.js"></script> */}
          <figure class="highlight1">
            <pre>
              <code class="language-html" data-lang="html">
                <span class="nt">&lt;script </span>
                {/* <span class="na">rel=</span> */}
                {/* <span class="s">"stylesheet"</span> */}
                <span class="na">src=</span>
                <span class="s">"https://gcovid.tk/static/index.js"</span>
                <span class="nt">&gt;</span>
                <span class="nt">&lt;/script</span>
                <span class="nt">&gt;</span>
              </code>
            </pre>
          </figure>
          <h5 className="mt-3 ml-2">Ví dụ mẫu</h5>
          <figure className="highlight3">
            <pre>
              <code className="language-html" data-lang="html">{"\n"}
                {"   "}
                <span className="cp">&lt;!doctype html&gt;</span><br />
                {"\n"}{"   "}
                <span className="nt">&lt;html</span>

                <span className="na"> lang=</span>
                {""}<span className="s">"en"</span>
                <span className="nt">&gt;</span>{"\n"}
                {"       "}
                <span className="nt">&lt;head&gt;</span>{"\n"}
                {"       "}
                <span className="c">&lt;!-- Required meta tags --&gt;</span>
                {"\n"}{"       "}
                <span className="nt">&lt;meta </span>
                {/* {""} */}
                <span className="na">charset=</span>
                {""}<span className="s">"utf-8"</span>
                {""}<span className="nt">&gt;</span>
                {"\n"}{"       "}
                <span className="nt">&lt;meta </span>
                {""}
                <span className="na">name=</span>
                {""}
                <span className="s">"viewport"</span>
                {""}<span className="na">content=</span>
                <span className="s">"width=device-width, initial-scale=1, shrink-to-fit=no"</span>
                <span className="nt">&gt;</span>{"\n"}
                {"\n"}{"       "}
                <span className="c">&lt;!-- Socket IO --&gt;</span>
                {"\n"}{"       "}
                <span className="nt">&lt;script </span>
                <span className="na">src=</span>
                <span className="s">"https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/script </span>
                <span className="nt">&gt;</span>{"\n"}
                {"       "}
                <span className="nt">&lt;/head&gt;</span>{"\n"}
                {"       "}
                <span className="nt">&lt;body&gt;</span>{"\n"}
                {"       "}{"\n"}
                {"       "}
                <span className="nt">&lt;div class="gcovid-wrap"&gt;</span>
                <span className="nt">&lt;/div&gt;</span>{"\n"}{"\n"}
                {"       "}


                <span className="nt">&lt;/script </span>
                <span className="na">src=</span>
                <span className="s">"https://gcovid.tk/static/index.js"</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;/script </span>
                <span className="nt">&gt;</span>{"\n"}
                {"       "}
                <span className="nt">&lt;/body&gt;</span>{"\n"}
                {"   "}
                <span className="nt">&lt;/html&gt;</span></code>
            </pre></figure>


          <h5 className="mt-3 ml-2">Demo</h5>

          <div className="row">
            <div className="col-6">
              <div className="demo_button">
                <img className="img" src="./buttondemo.jpg" />
              </div>
              <p className="note">Nút sau khi được tích hợp vào web của bạn</p>
            </div>
            <div className="col-6">
              <div className="demo_panel">
                <img className="img1" src="./paneldemo.jpg" />
              </div>
              <p className="note">Click để hiển thị giao diện chat</p>
            </div>
          </div>
        </div>

      </div >
    )
  }
}
