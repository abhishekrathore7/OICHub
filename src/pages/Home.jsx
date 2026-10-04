import { useEffect } from "react";
import "../App.css";

function Home() {

    useEffect(() => {
  document.title =
    "Oracle Interview Questions | OIC & VBCS Interview Preparation";

  const description = document.querySelector(
    'meta[name="description"]'
  );

  if (description) {
    description.setAttribute(
      "content",
      "Prepare for Oracle Cloud interviews with practical OIC and VBCS interview questions and answers covering Oracle Integration Cloud, Visual Builder, REST, SOAP, adapters and real-world scenarios."
    );
  } else {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Prepare for Oracle Cloud interviews with practical OIC and VBCS interview questions and answers covering Oracle Integration Cloud, Visual Builder, REST, SOAP, adapters and real-world scenarios.";
    document.head.appendChild(meta);
  }
}, []);

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <a href="/" className="logo">
            Oracle Interview Hub
          </a>

          <nav>
            <a href="/oic-interview-questions">OIC</a>
            <a href="/vbcs-interview-questions">VBCS</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <p className="eyebrow">ORACLE CLOUD INTERVIEW PREPARATION</p>

            <h1>
              Oracle Cloud
              <br />
              Interview Questions
            </h1>

            <p className="hero-text">
              Practical interview questions and answers for Oracle Integration
              Cloud and Visual Builder Cloud Service.
            </p>

            <div className="hero-buttons">
              <a
                href="/oic-interview-questions"
                className="button primary"
              >
                OIC Questions
              </a>

              <a
                href="/vbcs-interview-questions"
                className="button secondary"
              >
                VBCS Questions
              </a>
            </div>
          </div>
        </section>

        <section className="topics container">
          <div className="topic-card">
            <span className="topic-number">01</span>

            <h2>Oracle Integration Cloud</h2>

            <p>
              Prepare for OIC interviews with questions covering integrations,
              adapters, REST, SOAP, lookups, fault handling and real-world
              scenarios.
            </p>

            <a href="/oic-interview-questions">
              Read OIC Questions →
            </a>
          </div>

          <div className="topic-card">
            <span className="topic-number">02</span>

            <h2>Visual Builder Cloud Service</h2>

            <p>
              Prepare for VBCS interviews with questions covering Business
              Objects, Service Connections, REST APIs, Oracle JET, SDP and
              ADP.
            </p>

            <a href="/vbcs-interview-questions">
              Read VBCS Questions →
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>Oracle Interview Hub · Built for Oracle Cloud developers</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;